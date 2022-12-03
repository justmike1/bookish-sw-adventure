---
title: 'Setup traefik proxy on GKE behind GCE Load Balancer with HTTPS & Cloud Armor'
excerpt: 'Traefik is a leading modern reverse proxy and load balancer that makes deploying microservices easy. Traefik integrates with your existing infrastructure components and configures itself automatically and dynamically.'
coverImage: '/assets/blog/traefik-gce/diagram.jpg'
date: '2022-12-03T20:20:00.000Z'
ogImage:
  url: '/assets/blog/traefik-gce/diagram.jpg'
---

## What is traefik?
Traefik is a leading modern reverse proxy and load balancer that makes deploying microservices easy. Traefik integrates with your existing infrastructure components and configures itself automatically and dynamically.
Traefik is designed to be as simple as possible to operate, but capable of handling large, highly-complex deployments across a wide range of environments and protocols in public, private, and hybrid clouds. It also comes with a powerful set of middlewares that enhance its capabilities to include load balancing, API gateway, orchestrator ingress, as well as east-west service communication and more.

### GKE
As it is advanced tutorial I will assume you already have GKE deployed, if not, follow my guide on  `(tbc link)`

## Setup traefik on GKE under GCE Load Balancer & Cloud Armor
While finding this post you've stumbled across [traefik's own guide](https://traefik.io/blog/protect-applications-with-google-cloud-armor-and-traefik-proxy/), but the guide stops at getting you having the setup in HTTP and not HTTPS, here I will show the next steps to set you up secured with HTTPS.

* Before continuing please undo the "Updating the load balancer healthcheck" step

### BackendConfig
In order for traefik to be passed any traffic from GCE's Load Balancer, it's health check must pass, otherwise no traffic will pass and thus the whole process won't work, we will modify the `BackendConfig` manifest in order to match traefik's healthcheck port.

**1. Modify the BackendConfig custom resource manifest.**
```yaml
apiVersion: cloud.google.com/v1
kind: BackendConfig
metadata:
  name: backendconfig-armor-rule-1
spec:
  securityPolicy:
    name: "armor-rule-1"
  healthCheck:
    checkIntervalSec: 10
    timeoutSec: 5
    healthyThreshold: 3
    unhealthyThreshold: 7
    type: HTTP
    requestPath: /ping
    port: 8000
```

**2. Modify the values.yaml file from the previous guide.**
```yaml
additionalArguments:
  - --ping
  - --ping.entrypoint=web
service:
  annotations:
    cloud.google.com/backend-config: "{\"ports\": {\"80\":\"backendconfig-armor-rule-1\"}}"
providers:
  kubernetesIngress:
    ingressClass: traefik
    publishedService:
      enabled: true
      pathOverride: traefik/traefik   # namespace/traefik
ports:
  traefik:
    healthchecksPort: 8000
```

**3. Rollout chart, I am using chart version 19.0.3 while this post is written and in order for the guide to age well I am hard setting it.**
```bash
helm upgrade --install -f values.yaml traefik traefik/traefik --version 19.0.3
```

**4. Deploy google managed certificate.**
```yaml
apiVersion: networking.gke.io/v1
kind: ManagedCertificate
metadata:
  name: traefik-managed-cert
  namespace: traefik
spec:
  domains:
    - dev.example.com   # write here the full DNS record
```

**5. Modify catch all ingress according to previous steps.**
>I am using external-dns to create the dns records automatically, though you can do it manually with [gcloud cli](https://cloud.google.com/dns/docs/records#gcloud)
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: catch-all-ingress
  namespace: traefik
  annotations:
    kubernetes.io/ingress.allow-http: "false"
    kubernetes.io/ingress.class: "gce"
    networking.gke.io/managed-certificates: traefik-managed-cert
    kubernetes.io/ingress.global-static-ip-name: cloud-aromor-traefik-how-to
    external-dns.alpha.kubernetes.io/hostname: dev.example.com # you can remove this line if you've already created the DNS
spec:
  defaultBackend:
    service:
      name: traefik
      port:
        number: 80
```

**6. Modify Ingress manifest for the new HTTPS method.**
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: whoami-http-ing
  annotations:
    kubernetes.io/ingress.class: "traefik" # GKE doesn't support the ingressClassName spec
    traefik.ingress.kubernetes.io/router.entrypoints: web
spec:
  rules:
    - host: dev.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: whoamiv1
                port:
                  number: 80
```

## If you are experiencing any errors feel free to contact me on Linkedin. (toolbar icon)

# That's it! if the healthcheck passes, everything was deployed accordingly, the DNS record you made attached to the external ip you created, everything is set to go.

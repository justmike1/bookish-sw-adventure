---
title: 'Setup traefik proxy on GKE behind GCE Load Balancer with HTTPS & Cloud Armor'
excerpt: 'Traefik is a leading modern reverse proxy and load balancer that makes deploying microservices easy. Traefik integrates with your existing infrastructure components and configures itself automatically and dynamically.'
coverImage: '/assets/blog/traefik-gce/diagram.jpg'
date: '2020-03-16T05:35:07.322Z'
ogImage:
  url: '/assets/blog/traefik-gce/diagram.jpg'
---

## What is traefik?
Traefik is a leading modern reverse proxy and load balancer that makes deploying microservices easy. Traefik integrates with your existing infrastructure components and configures itself automatically and dynamically.
Traefik is designed to be as simple as possible to operate, but capable of handling large, highly-complex deployments across a wide range of environments and protocols in public, private, and hybrid clouds. It also comes with a powerful set of middlewares that enhance its capabilities to include load balancing, API gateway, orchestrator ingress, as well as east-west service communication and more.

### GKE
As it is advanced tutorial I will assume you already have GKE deployed, if not, follow my guide on  `(tbc link)`

## Deploy traefik's helm chart

1. Create values.yaml file.
```yaml
additionalArguments:
  - --ping
  - --ping.entrypoint=web
ingressRoute:
  dashboard: 
    enabled: false
providers:
  kubernetesIngress:
    ingressClass: traefik
    publishedService:
      enabled: true
      pathOverride: traefik/traefik   # namespace/traefik
ingressClass:
  isDefaultClass: false
service:
  type: NodePort
ports:
  web:
    nodePort: 32080
  websecure:
    nodePort: 32443
  traefik:
    healthchecksPort: 8000
```

2. Deploy chart.
```bash
helm upgrade --install -f values.yaml traefik traefik/traefik --version 19.0.3
```



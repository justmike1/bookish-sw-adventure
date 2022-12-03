# Mike Joseph's website

## About

The site is made for me to show myself in a more modern way to recruiters & also share guides for work I've done and realized there isn't something understanable for the reader to properly complete the task, like [running traefik behind gce's load balancer with HTTPS](./_posts/traefik-gce.md).


### Setup locally

* Install packages
    ```bash 
    npm install
    ```

* Create env file
    ```bash
    touch .env
    ```
    ```text
    NEXT_PUBLIC_CV_LINK= 
    NEXT_PUBLIC_CV_ID=
    NEXT_PUBLIC_LINKEDIN_USER=
    NEXT_PUBLIC_GITHUB_USER=
    NEXT_PUBLIC_REPOSITORY=
    NEXT_PUBLIC_OPEN_TO_WORK=false
    ```
    >file with production values is backed up on gdrive

* Run locally
    ```bash
    npm run dev
    ```
    >You will know see the site live on localhost:3000

### [Links to sites that helped me build it](./BIBLIOGRAPHY.md)

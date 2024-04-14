# Traefik demo to expose services running in a minikube kubernetes cluster to your localhost
It deploys a simple Hello World express app that you can find at the root of this repo.
1. Set the `TASK` variable in `Taskfile.yml` to point to your [task](https://taskfile.dev/) installation.
2. Run `task start` to start the service.
3. Visit the website at http://localhost:8081 and you should see "Hello World!"

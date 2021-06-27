# Modanisa TODOs

This is a monorepo for the Vue web app and the nodejs APIs.

## Quick start
For local development `npm i && npm start`

## Local testing

Run `npm test`

## Deployments

There is a Github Workflow in place which will monitor any change happens on `master` branch and run a deployment to AWS ECS.

The work flow will run all the test before pushing ECR images and running ECS deployment.

### For the Vue app:

It is built via `Dockerfile.web` and pushed to ECR, then runs on ECS, this `web` container will serve the built Vue app via nginx.

### For the APIs

It is built via `Dockerfile.api` file and pushed to ECR, then it runs on ECS, this `api` container runs native node web server.


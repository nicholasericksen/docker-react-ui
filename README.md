# Docker React UI
## Introduction
Docker React UI is a frontend development environment for quickly getting started
developing frontend React applications in a docker container setup.  It does not require a
backend and therefore allows for flexibility in overall application design.  Some may decide
to use Node for there api, while others may prefer a Python backend.  This project gives a
starting point for working with React in a containerized development environment and includes
webpack, hot reloading, Bootstrap 3, React Router, and more.  Feel free to customize it as you see fit.

## Getting started
First install the node dependencies with `npm install`.

For the next steps, you will need to have the docker engine running on your host (this has been tested with MAC OSX so far).
The steps for different operating systems are outlined here https://docs.docker.com/engine/installation/.

Once installed, build the docker image locally
`docker build -t docker-react-ui .`

To run the container locally with mounted host volume for development
`docker run -it -p 8080:8080 -v "$(pwd)"/public:/app/public docker-react-ui`.  To
run it in the background add the `-d` flag.

You can then navigate to http://localhost:8080/public to view your application.  When
you make changes to the source code, the webpage should automatically update without a
need to refresh the browser.

When making changes to configuration files that are not monitored by the webpack-dev-server you will
have to rebuild the image.

## Notes
* The container must be run with the same port locally as is exposed in the container.  This is
due to the way react-hot-loader polls for changes.
* This application should NOT be run in production as is.  Consult the Docker documentation to tips
on using Docker in production.  You will also want to use a different webserver than the webpack-dev-server.

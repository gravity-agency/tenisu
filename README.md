# Tenisu

This is the code for the tenisu exercice (https://tenisu.latelier.co/backend)

# Getting started

To get the Node server running locally:

- Clone this repo
- `yarn install` to install all required dependencies
- `yarn dev` to start the local server (by default port 4001, can be edited in the env.ts file)

## Unit tests

- `yarn test` to run unit tests

# Code Overview

## Application Structure

- `bin/` - This folder contains www.ts file, the http server configuration.
- `etc/` - This folder contains the script to build the project
- `test/` - This folder contains unit tests.
- `src/app.ts` - The entry point to our application. It also requires the routes and models we'll be using in the application.
- `src/routes/` - This folder contains the route definitions for our API.
- `src/models/` - This folder contains the schema definitions for our models.
- `src/errors/` - This folder contains the errors exception file to.

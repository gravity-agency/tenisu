# Tenisu

This is the code for the tenisu exercice (https://tenisu.latelier.co/backend)

# Getting started

To get the Node server running locally:

- Clone this repo
- `yarn install` to install all required dependencies
- `yarn dev` to start the local server

# Code Overview

## Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests

## Application Structure

- `app.ts` - The entry point to our application. It also requires the routes and models we'll be using in the application.
- `routes/` - This folder contains the route definitions for our API.
- `models/` - This folder contains the schema definitions for our models.
- `middleware/` - This folder contains the middleware functions.

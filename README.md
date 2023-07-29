# TODO List App
![React](https://img.shields.io/badge/React-blue?logo=react&style=plastic)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-blue?logo=tailwind-css&style=plastic)
![Node.js](https://img.shields.io/badge/Node.js-green?logo=node.js&style=plastic)
![Redux](https://img.shields.io/badge/Redux-purple?logo=redux&style=plastic)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript&style=plastic)
![Express](https://img.shields.io/badge/Express-grey?logo=express&style=plastic)
![MongoDB](https://img.shields.io/badge/MongoDB-green?logo=mongodb&style=plastic)

This is a TODO list app with features for creating and deleting tasks. It uses the following technologies:

- ![React](https://img.shields.io/badge/React-blue?logo=react&style=plastic)
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-blue?logo=tailwind-css&style=plastic)
- ![Node.js](https://img.shields.io/badge/Node.js-green?logo=node.js&style=plastic)
- ![Redux](https://img.shields.io/badge/Redux-purple?logo=redux&style=plastic)
- ![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript&style=plastic)
- ![Express](https://img.shields.io/badge/Express-grey?logo=express&style=plastic)
- ![MongoDB](https://img.shields.io/badge/MongoDB-green?logo=mongodb&style=plastic)


## Getting Started

To run the app, follow the instructions below:

### Client Installation

```bash
npm run install:client
# or using yarn
yarn install:client
```
# Server Installation
```bash
npm run install:server
# or using yarn
yarn install:server
```
# Development
To run the app in development mode, use the following command:
```bash
npm run dev
# or using yarn
yarn dev
```
This will start both the client and server applications concurrently.

# Folder Structure
## Client
The client-side folder structure is as follows
```
src
|-- app
|-- components
|-- libs
|   |-- api
|-- ... (other files and folders)
```
# Server
The server-side folder structure is as follows:
```
src
|-- controllers
|-- database
|   |-- models
|-- config
|-- routes
index.js
```

## Config
The config folder contains the index.js file with all the configuration files and dotenv files.

## Database
The database folder contains the models folder for defining Mongoose models and the database connection in the index.js file.

# API Documentation
The API is built using REST architecture and the available endpoints are as follows:
```
GET /api/tasks: Get all tasks
POST /api/tasks: Create a new task
DELETE /api/tasks/:id: Delete a task by ID
Make sure to use appropriate HTTP methods for each endpoint.
```

Happy task managing!





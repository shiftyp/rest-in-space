# Express.js API Exercise

## Overview

In this exercise, you'll complete a partially built Express.js API for managing fictional space resources. The API follows RESTful principles and includes OpenAPI/Swagger documentation.

## Learning Objectives

- Understand how to implement RESTful endpoints in Express.js
- Practice handling different HTTP methods
- Learn how to validate input data
- Gain experience with error handling in APIs

## Prerequisites

- Node.js installed (or using the provided Firebase Studio environment)
- Text editor or IDE (or the Firebase Studio environment)
- Swagger UI is included in the project for testing the API

## Setup

1. Navigate to the `express-api` directory in your terminal:
  ```bash
  cd express-api
  ```

2. Install dependencies using npm (Node Package Manager):
  ```bash
  npm install
  ```
  This command reads the package.json file and installs all required libraries.

3. Start the server:
  ```bash
  npm dev
  ```
  This runs the script defined in package.json, which starts the Express server.

4. Initialize the git repository:
  ```
  git init
  git add .
  git commit -m "initial commit :rocket:"
  ```

4. Visit http://localhost:3000 (Or the proxied URL from Firebase Studio) in your browser to see the welcome message

5. Visit http://localhost:3000/api-docs (Or the proxied URL from Firebase Studio) to see the API documentation
  This is a Swagger UI that automatically documents your API based on the OpenAPI specification.

## Your Task

### Understanding the Project Structure

Before you start coding, let's understand the project structure:

- `server.js`: The entry point that starts the Express server
- `src/app.js`: Configures the Express application with middleware and routes
- `src/routes/resources.js`: Contains the route handlers for our API endpoints (this is where you'll work)
- `docs/openapi.yaml`: The OpenAPI specification used by Swagger UI for documenting and testing the API

Express uses the concept of **routes** to determine how an application responds to client requests to specific endpoints (URIs) with specific HTTP methods (GET, POST, etc.).

## Testing Your Implementation

After implementing each route / endpoint, you can test it using Swagger UI:

- Navigate to the Swagger UI at http://localhost:3000/api-docs (or the proxied URL with Firebase Studio)
- This interactive documentation allows you to try out your API endpoints directly in the browser
- Click on an endpoint, then click the "Try it out" button
- Fill in any required parameters and click "Execute"

## Time for the exercise!

Open the file `src/routes/resources.js` and implement the endpoints according to the following GitHub issues! After each endpoint, stage and commit your changes like so:

```
git add src/routes/resources.js
git commit -m "Completed issue #1 :astronaut:"
```

1. [GET all resources](https://github.com/shiftyp/rest-in-space/issues/1)
2. [GET a specific resource by ID](https://github.com/shiftyp/rest-in-space/issues/2)
3. [POST a new resource](https://github.com/shiftyp/rest-in-space/issues/3)
4. [PUT to update a resource](https://github.com/shiftyp/rest-in-space/issues/4)

### Checkout (pun intended :smile:) your answers!

After you've implemented the endpoints, you can check your answers by looking at this ["Pull Request"](https://github.com/shiftyp/rest-in-space/pull/5) (a chance to review code before merging) comparing your implementation with the provided answers in the `answers` branch

```bash
cd .. # if in the express directory
git remote add origin https://github.com/shiftyp/rest-in-space.git
git fetch origin
git diff origin/answer -- src/routes/resources.js
```

If you see any differences, you can fix them and repeat the process until your implementation matches the answers. Once you've completed the above steps, you can also check out the answers branch to see the completed implementation:

```bash
git checkout answer
```



# Express.js API Exercise

In this exercise, you'll complete a partially built Express.js API for managing fictional space resources. The API follows RESTful principles and includes OpenAPI/Swagger documentation.

## Prerequisites

- Node.js installed (or using the provided IDX environment)
- Text editor or IDE (or the IDX environment)

## Setup (2 minutes)

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
  npm start
  ```
  This runs the script defined in package.json, which starts the Express server.

4. Visit http://localhost:3000 in your browser to see the welcome message

5. Visit http://localhost:3000/api-docs to see the API documentation
  This is a Swagger UI that automatically documents your API based on the OpenAPI specification.

## Your Task (8 minutes)

### Understanding the Project Structure

Before you start coding, let's understand the project structure:

- `server.js`: The entry point that starts the Express server
- `src/app.js`: Configures the Express application with middleware and routes
- `src/routes/resources.js`: Contains the route handlers for our API endpoints (this is where you'll work)
- `docs/openapi.yaml`: The OpenAPI specification that documents the API

Express uses the concept of **routes** to determine how an application responds to client requests to specific endpoints (URIs) with specific HTTP methods (GET, POST, etc.).

Open the file `src/routes/resources.js` and implement the following endpoints:

### 1. GET all resources

Implement the endpoint to return all resources in the collection. In Express, the `res.json()` method automatically sets the Content-Type header to application/json and converts the JavaScript object to JSON format.

```javascript
// GET all resources
router.get('/', (req, res) => {
  // TODO: Return all resources as JSON
});
```

### 2. GET a specific resource by ID

Implement the endpoint to return a specific resource by its ID. Return a 404 error if the resource doesn't exist.

In Express, route parameters are named URL segments used to capture values at specific positions in the URL. The captured values are stored in the `req.params` object.

```javascript
// GET a specific resource by ID
router.get('/:id', (req, res) => {
  // TODO: Find the resource by ID
  // TODO: Return 404 if not found
  // TODO: Return the resource as JSON if found
});
```

### 3. POST a new resource

Implement the endpoint to create a new resource. Validate that required fields are present.

In Express, the `req.body` object contains the data submitted in the request body. This is available because we've added the `express.json()` middleware in app.js, which parses incoming JSON requests.

```javascript
// POST a new resource
router.post('/', (req, res) => {
  // TODO: Extract data from request body
  // TODO: Validate required fields (name, rarity, value)
  // TODO: Create a new resource with a unique ID
  // TODO: Add to resources array
  // TODO: Return the new resource with 201 status code
  // Note: 201 is the HTTP status code for "Created"
});
```

### 4. PUT (update) a resource

Implement the endpoint to update an existing resource. Return a 404 error if the resource doesn't exist.

The PUT method is used to update an existing resource. In RESTful APIs, PUT typically replaces the entire resource with the new representation, while PATCH (not implemented here) would partially update a resource.

```javascript
// PUT (update) a resource
router.put('/:id', (req, res) => {
  // TODO: Find the resource by ID
  // TODO: Return 404 if not found
  // TODO: Update the resource with new values
  // TODO: Return the updated resource
});
```

## Testing Your Implementation

After implementing each endpoint, you can test it using (in order of ease of use):

1. **The Swagger UI** at http://localhost:3000/api-docs
  - This interactive documentation allows you to try out your API endpoints directly in the browser
  - Click on an endpoint, then click the "Try it out" button
  - Fill in any required parameters and click "Execute"

2. **Postman** or another API client
  - Be sure to use localhost:3000 as the hostname, or the proxied URL if using a web environment like Project IDX
  - The web based postman interface will not work with localhost urls

3. **curl commands** from the terminal
  - If using IDX or a local environment, locahost will work from an IDX or local terminal
  - If using local CURL with IDX, use the proxied url
  - For example, to get all resources:
    ```bash 
    curl http://localhost:3000/api/resources
    ```
  - To create a new resource:
    ```bash
    curl -X POST http://localhost:3000/api/resources \
      -H "Content-Type: application/json" \
      -d '{"name":"Cosmicite","rarity":"Uncommon","value":3000}'
    ```

## Learning Objectives

- Understand how to implement RESTful endpoints in Express.js
- Practice handling different HTTP methods
- Learn how to validate input data
- Gain experience with error handling in APIs

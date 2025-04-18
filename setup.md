## 🔌 What is an API?

API stands for Application Programming Interface. An API is a set of rules and protocols that allows one software application to interact with another. Think of it as a contract between different software components that defines how they should interact with each other, as well as the data they can exchange.

APIs are everywhere in software development:

- **Web APIs**: Allow web browsers to communicate with web servers
- **Operating System APIs**: Enable applications to interact with the operating system
- **Library APIs**: Provide methods and data for developers to use
- **Hardware APIs**: Allow software to interact with hardware components

In this lab, we'll focus on Web APIs, specifically REST APIs, which are a common way to expose data and functionality over the internet. Web APIs typically use HTTP as the communication protocol and exchange data in formats like JSON (JavaScript Object Notation), YAML (Yet Another Markup Language), or less commonly various forms of XML (eXtensible Markup Language, not including HTML).

## 🌐 What is a REST API?

REST stands for Representational State Transfer. In a nutshell, REST is an architecture for Web APIs, whereby representations (think the JSON, YAML, or XML) of the state (current values of data) of resources (think data grouped around common objects your API operates on) are transferred (using HTTP or some other mechanism) between a client and a server for the purpose of reading or modifying that state. While we're transferring state, the requests should themselves be "stateless" meaning that any request should be able to be processed by the server without knowledge of previous requests.

### 💯 Key REST Ideas

1. **Resource-Based**: Everything is a resource, identified by a unique URL (Uniform Resource Locator) also known as a URI (Uniform Resource Identifier)
2. **Stateless**: Each request contains all information needed to complete it, as previously "stated" 😀
3. **Client-Server Architecture**: Separation of concerns between client and server, with the former requesting and the latter responding
4. **Uniform Interface**: Consistent way to interact with resources, including consistent URL's
5. **Layered System**: Client cannot tell if it's connected directly to the server, and not some intermediate layer in front of the server like a proxy, or some deeper layer behind it like a database.
6. **Cacheability**: Responses must define themselves as cacheable or non-cacheable to prevent clients from reusing stale or inappropriate data but allow for more efficient communication 

There are two additional principles called **Code on Demand** (CoD) and **Hypermedia As The Engine Of Application State** (HATEOAS), which are not directly related to our REST examples, but are aspects of REST as a complete concept. CoD allows clients to request and execute code on the server, which is used for example in websites to load JavaScript and create dynamic pages. HATEOAS allows clients to navigate and interact with resources through hyperlinks, which is can be used for dynamic content navigation, although it is more common in HTML than in JSON.

While REST doesn't specify HTTP as the transport mechanism, HTTP is the most common and practical way to implement RESTful APIs. In HTTP REST API's (much acronym 🐶), HTTP methods (POST, GET, PUT / PATCH, DELETE) are used to perform CRUD operations on resources. There are additional methods, like HEAD and OPTIONS, but they are not directly related to our REST examples.

### ⚙️ HTTP Methods

- **POST**: Create a new resource (Create)
- **GET**: Retrieve a resource (Read)
- **PUT/PATCH**: Update an existing resource (Update)
- **DELETE**: Remove a resource (Delete)

### 🗺️ RESTful URL Schemes

In a RESTful API, URLs are designed to represent resources, and HTTP methods indicate the action to perform on those resources. REST is generally made up of resources (individual books), and collections or resources (all books). The URLS for collections of resources are often plural, while the URLS for individual resources are often singular.

Here's an example of a set of RESTful endpoints for managing a collection of books. 

| HTTP Method | URL Pattern | Description |
|-------------|-------------|-------------|
| GET | `/books` | Retrieve a list of all books |
| GET | `/books/:id` | Retrieve a specific book by ID |
| POST | `/books` | Create a new book |
| PUT | `/books/:id` | Update an existing book |
| DELETE | `/books/:id` | Delete a book |

The `:id` in the URL is a parameter that represents a unique identifier for a specific book. This is a common pattern in REST APIs, where the ID is used to identify a specific resource. ID's can be anything unique, including numbers and strings. The most common type of ID is a UUID (Universally Unique Identifier), and consists of 32 hexadecimal digits, often formatted as 5 groups of 4 digits separated by hyphens (e.g., `123e4567-e89b-12d3-a456-426614174000`).

#### 🦅 Nested Resources

For related resources, like authors and their books, you may use sub collections, or sub-resources. These exist in a nested fashion under the parent resource:

| HTTP Method | URL Pattern | Description |
|-------------|-------------|-------------|
| GET | `/authors/:authorId/books` | Get all books by a specific author |
| POST | `/authors/:authorId/books` | Add a new book for an author |
| GET | `/authors/:authorId/biography` | Get the biography of a specific author |

### 🤷 When REST doesn't cut it...

REST is a set of principles, not a framework. It's a way of thinking about how to design APIs, not a set of rules to follow. If you need to do something that REST doesn't support, you can always use a different approach.

#### 🛑 Non-CRUD Operations

Sometimes you need operations that don't fit neatly into CRUD. For example, you might want to start a process that may or may not directly change resource state. For these cases you may want to move outside of REST and utilize the "controller" pattern, where a resource, collection, or whole API will define a standalone endpoint that performs some action:

| HTTP Method | URL Pattern | Description |
|-------------|-------------|-------------|
| POST | `/books/:id/publish` | Publish a book (state change) |
| GET | `/books/search` | Search for books with query parameters |

##  Requests and Responses

### Request Structure

Requests to REST apis consist of a URL, HTTP method, and optional headers and body. The URL is the endpoint of the API resource or collection, the HTTP method is the action to perform, and the headers and body. The body is optional, and is used for requests that need to send data to the server. If we were to look at the structure of an HTTP request to create a book in a simplified JSON format, it might look like this:

```json
{
  "url": "https://api.example.com/books",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "name": "Example Book",
    "author": "John Doe"
  }
}
```

### Response Structure

Responses from an API consist of a status code, a set of headers, and a body. The status code is a number that indicates the result of the request, and the headers and body are optional depending on what the server needs to communicate. If we were to look at the structure of an HTTP response for a GET request for the book from the previous example in our simplified JSON format, it might look like this:

```json
{
  "status": 200,
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "id": "123",
    "name": "Example Book",
    "author": "John Doe"
  }
}
```

## 🔍 HTTP Status Codes & Error Handling

Proper use of HTTP status codes and consistent error handling are essential aspects of a well-designed REST API.

### 🚦 HTTP Status Codes

HTTP status codes indicate the result of the HTTP request. They are grouped into five classes:

#### 2xx - Success

- **200 OK**: The request succeeded
- **201 Created**: A new resource was successfully created
- **204 No Content**: The request succeeded, but there's no content to return (common for DELETE operations)

#### 3xx - Redirection

- **301 Moved Permanently**: The resource has been moved permanently
- **304 Not Modified**: The resource hasn't changed since the last request (used with conditional requests)

#### 4xx - Client Error

- **400 Bad Request**: The request was malformed or invalid
- **401 Unauthorized**: Authentication is required or failed
- **403 Forbidden**: The client doesn't have permission to access the resource
- **404 Not Found**: The requested resource doesn't exist
- **409 Conflict**: The request conflicts with the current state of the resource
- **422 Unprocessable Entity**: The request was well-formed but contains semantic errors

#### 5xx - Server Error

- **500 Internal Server Error**: An unexpected error occurred on the server
- **502 Bad Gateway**: The server received an invalid response from an upstream server
- **503 Service Unavailable**: The server is temporarily unavailable

### 💬 Error Response Format

In addition to a status code, responses may also include a set of headers and a body. Consistent error response formats can be helpful for clients to handle errors effectively. If we were to look at a structure of an error response in JSON format, it might look like this:

```json
{
  "status": 404,
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "The requested book could not be found",
    "details": {
      "resourceId": "123",
      "resourceType": "book"
    }
  }
}
```

## 🔐 Security, Authentication, Authorization & Permissions

Security is a critical aspect of API design. Unless you're creating an API that's free and open to the public, you'll want to implement some form of authentication and authorization, and you'll always want to implement security best practices.

### 🪪 Authentication

Authentication is the process of verifying who a user is. In the context of APIs, it's about confirming the identity of the client making requests. Common authentication methods include:

- **API Keys**: Simple string tokens included in request headers (e.g., `X-API-Key: abc123`)
- **Bearer Tokens**: Often implemented as JSON Web Tokens (JWT), included in the Authorization header
- **Basic Auth**: Username and password encoded in Base64, sent in the Authorization header
- **OAuth 2.0**: A protocol for authorization that enables third-party applications to access resources without sharing credentials

In Express.js, authentication is typically implemented as middleware that checks credentials before allowing the request to proceed to route handlers.

### 🚦 Authorization

Authorization determines what an authenticated user is allowed to do. While authentication confirms "who you are," authorization decides "what you can do." Common authorization approaches include:

- **Role-Based Access Control (RBAC)**: Users are assigned roles (admin, editor, viewer) with predefined permissions
- **Attribute-Based Access Control (ABAC)**: Permissions are based on attributes of users, resources, and environment
- **Permission-Based**: Specific permissions are assigned directly to users

In practice, authorization often involves checking user roles or permissions stored in a database or encoded in authentication tokens, then making access decisions based on those attributes.

### 🛡️ Security Best Practices

Beyond authentication and authorization, implementing general security best practices is crucial for protecting your API from various threats including data breaches, injection attacks, and denial of service. These practices should be applied regardless of whether your API is public or private, and they form the foundation of a secure API implementation:

1. **Always use HTTPS** to encrypt data in transit
2. **Implement rate limiting** to prevent abuse
3. **Validate all input** to prevent injection attacks
4. **Use appropriate HTTP status codes** (401 for authentication failures, 403 for authorization failures)
5. **Don't expose sensitive information** in error messages
6. **Implement token expiration** for API Tokens
7. **Log authentication events** for audit trails

## 💻 Node.js and Express

**Node.js** is a JavaScript runtime built on the Chrome Browser's "V8" JavaScript engine. It allows developers to run JavaScript on the server-side, outside of a browser environment. Like the browser Node.js uses an event-driven programming model, and has similar API's to the browser with the subtraction of DOM ( Document Object Model) and other browser specific APIs, and the addition of Node.js specific APIs for accessing the file system, network, and other server-side capabilities.

**Express.js** is a minimal and flexible web application framework for Node.js. It's a library, like React, and like React it provides some basic building blocks for your code, in this case for creating server applications and APIs. It contributes the following features:

- **Routing**: Define routes to handle different HTTP methods and URLs. For example, a GET route defined on a `router` object for the `/` or root endpoint for the router might look like this:
    ```javascript
    router.get('/', (req, res) => {
      res.json({ message: 'Hello, world!' });
    });
    ```
- **Middleware**: Process requests before they reach route handlers. These are used for "cross-cutting" concerns like logging, error handling, and generic data processing. For example, a middleware callback that logs the time of a request might look like this:
    ```javascript
    router.use((req, res, next) => {
      console.log('Time:', Date.now());
      next();
    });
    ```
- **Template Engines**: Generate HTML dynamically (though we focus on JSON for APIs)
- **Error Handling**: Manage and respond to errors gracefully, either through middleware or specific error handling in routes

### 🧲 How They Work Together

Node.js provides the runtime environment (like the browser is a runtime environment for a website), while Express provides the framework for building web applications and APIs. In an Express application:

1. Node.js handles the server operations and JavaScript execution
2. Express manages routing, middleware, and HTTP interactions
3. Your application code defines specific routes and business logic

This combination makes it easy to build servers that are extensible and scalable, in this case to build REST APIs that can serve JSON data to clients.

### 🛠️ Express.js Implementation Example

Putting everything together, here's an example implementation of what REST, Node.js and Express.js look like in practice:

```javascript
// In a books controller file
const express = require('express');
const router = express.Router();

// GET /books
router.get('/', (req, res) => {
  // Logic to get all books
  res.json(books);
});

// GET /books/:id
router.get('/:id', (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
});

// POST /books
router.post('/', (req, res) => {
  // Logic to create a new book
  const newBook = { id: generateId(), ...req.body };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT /books/:id
router.put('/:id', (req, res) => {
  // Logic to update a book
  const index = books.findIndex(b => b.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Book not found' });
  books[index] = { ...books[index], ...req.body };
  res.json(books[index]);
});

// DELETE /books/:id
router.delete('/:id', (req, res) => {
  // Logic to delete a book
  const index = books.findIndex(b => b.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Book not found' });
  books.splice(index, 1);
  res.status(204).send();
});

// POST /books/:id/publish (non-CRUD / more complex update operation)
router.post('/:id/publish', (req, res) => {
  // Logic to publish a book
  const book = books.find(b => b.id === req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  book.published = true;
  book.publishDate = new Date();
  res.json(book);
});

module.exports = router;
```
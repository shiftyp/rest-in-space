# 🚀 REST API Lab

Welcome to the REST API Lab! This hands-on exercise will introduce you to RESTful API concepts and Express.js, a Node.js framework for building web applications and APIs.

## 🔌 What is an API?

API stands for Application Programming Interface. An API is a set of rules and protocols that allows one software application to interact with another. Think of it as a contract between different software components that defines how they should interact with each other, as well as the data they can exchange.

APIs are everywhere in software development:

- **Web APIs**: Allow web browsers to communicate with web servers
- **Operating System APIs**: Enable applications to interact with the operating system
- **Library APIs**: Provide functions and methods for developers to use
- **Hardware APIs**: Allow software to interact with hardware components

In this lab, we'll focus on Web APIs, specifically REST APIs, which are a common way to expose data and functionality over the internet. Web APIs typically use HTTP as the communication protocol and exchange data in formats like JSON or XML.

## 🌐 What is a REST API?

REST stands for Representational State Transfer, and in a nutshell, REST is an architecture for Web APIs, whereby the state (current values of data) of resources (think data grouped around common objects your API operates on) are transferred (using HTTP or some other mechanism) between a client and a server for the purpose of reading or modifying that state. While we're transferring state, the requests should themselves be "stateless" meaning that any request should be able to be processed by the server without knowledge of previous requests.

### 💯 Key REST Ideas

1. **Resource-Based**: Everything is a resource, identified by a unique URL
2. **Stateless**: Each request contains all information needed to complete it
3. **Client-Server Architecture**: Separation of concerns between client and server
4. **Uniform Interface**: Consistent way to interact with resources
5. **Layered System**: Client cannot tell if it's connected directly to the server
6. **Cacheability**: Responses must define themselves as cacheable or non-cacheable to prevent clients from reusing stale or inappropriate data

There are two additional principles called **Code on Demand** (CoD) and **Hypermedia As The Engine Of Application State** (HATEOAS), which are not directly related to our REST examples, but are an aspect of RESTful APIs. CoD allows clients to request and execute code on the server, which is used for example in websites to load JavaScript and create dynamic pages. HATEOAS allows clients to navigate and interact with resources through hyperlinks, which is can be used for dynamic content navigation, although it is more common in HTML than in JSON.

While REST doesn't specify HTTP as the transport mechanism, HTTP is the most common and practical way to implement RESTful APIs. In HTTP REST API's (much acronym 🐶), HTTP methods (POST, GET, PUT / PATCH, DELETE) are used to perform CRUD operations on resources. There are additional methods, like HEAD and OPTIONS, but they are not directly related to our REST examples.

### HTTP Methods

- **POST**: Create a new resource (Create)
- **GET**: Retrieve a resource (Read)
- **PUT/PATCH**: Update an existing resource (Update)
- **DELETE**: Remove a resource (Delete)

## 💻 Node.js and Express

**Node.js** is a JavaScript runtime built on the Chrome Browser's "V8" JavaScript engine. It allows developers to run JavaScript on the server-side, outside of a browser environment. Like the browser Node.js uses an event-driven programming model, and has similar API's to the browser with the addition of Node.js specific APIs for accessing the file system, network, and other server-side capabilities.

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

## 🔎 Overview

This lab consists of two parts:

1. **SpaceTraders API Exploration**: Interact with a real-world RESTful API using Postman to understand API design principles, authentication, and resource manipulation.

2. **Express.js API Implementation**: Complete a partially built Express.js API for managing fictional space resources, implementing three core REST operations (GET, POST, PUT).

## 📖 Learning Objectives

- Understand RESTful API principles and best practices
- Experience working with a production API (SpaceTraders.io)
- Learn how to implement a RESTful API using Express.js
- Practice handling HTTP methods, routes, and responses
- Gain familiarity with API documentation using OpenAPI/Swagger

## 📝 Prerequisites

- Node.js installed (or using the provided IDX environment)
- Basic JavaScript knowledge
- Postman installed (or Postman Web)
- A SpaceTraders.io account (you'll create this during the lab)

## 🔰 Getting Started

### Part 1: SpaceTraders API Exercise

1. Navigate to the `space-traders` directory
2. Follow the instructions in `exercise.md`
3. Complete the exercise individually and final "quiz" in assigned groups

### Part 2: Express.js API Implementation

1. Navigate to the `express-api` directory
2. Follow the instructions in `exercise.md` individually
3. Implement the missing endpoints in the Space Resource API leveraging the documentation and teaching staff to guide your implementation
4. Test your implementation using the Swagger documentation (which when your server is running is located at [http://localhost:3000/api-docs](http://localhost:3000/api-docs))

## ⏰ Time Allocation

- SpaceTraders API Exercise: 10 minutes
- Express.js API Implementation: 10 minutes
- Total lab time: 20 minutes

## 📓 Resources

- [Express.js Documentation](https://expressjs.com/)
- [SpaceTraders API Documentation](https://spacetraders.io/docs/api)
- [RESTful API Design Best Practices](https://restfulapi.net/)
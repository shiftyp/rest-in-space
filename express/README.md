# Space Resource API

A simple Express.js API for managing fictional space resources. This project demonstrates basic RESTful API concepts with an in-memory data store. It also features a Swagger documentation for API at [http://localhost:3000/api-docs](http://localhost:3000/api-docs), which allows as well for testing the API through the docs page.

## Features

- List all space resources
- Get details about a specific resource
- Add new space resources
- Update existing resources

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
# Install dependencies
npm install
```

### Running the Server

```bash
# Start the server
npm start

# Start with auto-reload (development)
npm run dev
```

The server will run on http://localhost:3000

## API Endpoints

### GET /api/resources
Returns a list of all space resources

### GET /api/resources/:id
Returns details about a specific resource

### POST /api/resources
Creates a new space resource
```json
{
  "name": "Resource Name",
  "rarity": "Common|Uncommon|Rare|Legendary",
  "value": 1000,
  "description": "Resource description",
  "origin": "Where it's found"
}
```

### PUT /api/resources/:id
Updates an existing resource (all fields optional)

## Sample Resources

The API comes pre-loaded with sample resources like Quantium, Stellarite, Voidstone, and Lunarium.

## Possible Bonus Enhancements!

- Add DELETE endpoint
- Implement filtering and sorting
- Add persistence with a database
- Create a simple frontend

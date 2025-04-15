# SpaceTraders API Exercise (10 minutes)

## Overview
In this quick exercise, you'll explore the SpaceTraders API using Postman to understand RESTful API concepts and how to interact with a game API.

## Prerequisites
- [Postman](https://www.postman.com/downloads/) installed or Postman Web
- SpaceTraders.io account (we'll create this in the setup)

## Setup (3 minutes)

### Register for SpaceTraders.io
1. Visit [my.spacetraders.io](https://my.spacetraders.io) and create an account
2. After registering, navigate "Settings", and generate a new account token
3. Copy the token and set it as the `bearerToken` environment variable in Postman

### Set Up Postman
1. Open Postman
2. Import the collection by clicking "Import" and selecting the `space-traders-postman.json` file
3. Create a new environment in Postman with the following variables:
   - `baseUrl`: `https://api.spacetraders.io/v2`
   - `bearerToken`: (leave empty for now)
   - `userApiKey`: (paste your user-level API key here)

## Exercise Steps

### Step 1: Register a New Agent (2 minutes)
1. Open the "Register New Agent" request
2. In the Authorization tab, select "API Key" as the type
3. Set the Key to "x-api-key" and the Value to "{{userApiKey}}" (using your environment variable)
4. In the request body, replace the symbol with a unique name (e.g., `"symbol": "YOUR_CALLSIGN"`) and input a faction (e.g., `INDEPENDENT` or `VOID`)
5. Send the request
6. From the response, copy your agent token and set it as the `bearerToken` environment variable
   - This agent token is different from your user API key and is specific to this agent

### Step 2: Explore Your Agent (1 minute)
1. Find and send the "My Agent Details" request
2. Note your starting credits and headquarters location

### Step 3: Navigate and Extract Resources (2 minutes)
1. Find your ship using the "List Ships" request
2. Use the "Navigate Ship" request to move to an asteroid field
   - You'll need to find a nearby asteroid field using the "List Waypoints" request
3. Once at the asteroid, use the "Extract Resources" request to mine resources

## Bonus Challenge
If you have time remaining, try to:
1. Sell your extracted resources at a marketplace
2. Complete a contract (find, accept, and fulfill)

## Learning Objectives
- Understand RESTful API structure and authentication
- Learn how to chain API requests to accomplish a goal
- Experience working with a real-world API that follows REST principles
- Observe how API responses contain links to related resources

## Tips
- Pay attention to the response status codes and error messages
- Many responses include hyperlinks to related resources (HATEOAS principle)
- The SpaceTraders API uses resources, and standard HTTP methods (GET, POST, PATCH) for different operations.
    - The methods:
        - GET: Retrieve data from the API
        - POST: Create new resources
        - PATCH: Update existing resources
        - DELETE: Remove resources
    - This is a RESTful API, which means it follows the REST principles (mostly, as do most REST APIs)
- Some actions have cooldown periods, check the ship's status if an action fails

## Group Quiz (3 minutes)
Discuss some of these questions as a group after completing the exercise:

1. **REST Principles**: What REST principles did you observe in the SpaceTraders API? How did the API organize resources and use HTTP methods?

2. **Authentication**: Compare the two types of authentication used in this exercise (user API key vs. agent token). What are the differences and when would you use each?

3. **Resource Relationships**: How does the API represent relationships between resources (e.g., between ships and waypoints)? Did you notice any examples of HATEOAS?

4. **Status Codes**: What HTTP status codes did you encounter? What did each one indicate about your request?

5. **API Design**: If you were designing this API, what might you do differently? Are there any endpoints you would add or change?

6. **Error Handling**: Did you encounter any errors? How did the API communicate what went wrong?

7. **Real-world Applications**: How do the concepts in this exercise apply to real-world API development in your projects?


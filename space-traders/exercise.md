# SpaceTraders API Exercise (10 minutes)

## Overview
In this quick exercise, you'll explore the SpaceTraders API using Postman to understand RESTful API concepts and how to interact with an API over HTTP. You may not finish this exercise in the time alotted. That's ok! There's much more to explore in SpaceTraders than we can cover in this exercise.

## Prerequisites
- [Postman](https://www.postman.com/downloads/) installed or Postman Web
- SpaceTraders.io account (we'll create this in the setup)

## Setup (2 minutes)

### Register for SpaceTraders.io
1. Visit [my.spacetraders.io](https://my.spacetraders.io) and create an account
2. After registering, navigate "Settings", and generate a new account token, giving it a name such as "postman"
3. Copy the token and set it as the `userApiKey` environment variable in Postman

### Set Up Postman
1. Open Postman
2. Import the collection by clicking "Import" and selecting the `space-traders-postman.json` file
3. Create a new environment in Postman with the following variables:
   - `bearerToken`: (leave empty for now)
   - `userApiKey`: (paste your user-level API key here)
4. Be sure to save your environment when making changes

## Exercise Steps

### Step 1: Register a New Agent (1 minutes)
1. Open the "Register New Agent" request
2. In the Authorization tab, select "API Key" as the type
3. Set the Key to "x-api-key" and the Value to "{{userApiKey}}" (using your environment variable)
4. In the request body, replace the symbol with a unique name (e.g., `"symbol": "YOUR_CALLSIGN"`) and input a faction of `COSMIC`
5. Send the request
6. From the response, copy your agent token and set it as the `bearerToken` environment variable
   - This agent token is different from your user API key and is specific to this agent

### Step 2: Explore Your Agent (1 minute)
1. Find and send the "My Agent Details" request
2. Note your starting credits and headquarters location
3. The location should look like this: X1-TF9-A1
   - It has three parts, with the first two parts identifying the system (X1-TF9)
   - All three parts comprise the waypoint symbol, or a specific place in a specific system (X1-TF9-A1)
4. List your ships, and make note of the symbol of your Frigate ship (it should be your agent callsign postfixed by "-1", so "YOUR_CALLSIGN-1")

### Step 3: Purchase Goods at a Marketplace (2 minutes)
1. Find a marketplace using the "Get Market" request
   - You'll need to provide a system symbol and waypoint symbol where a market exists
   - Your starting location should have a marketplace (For example, system X1-TF9, waypoint X1-TF9-A1)
2. Find another marketplace using the "Get Market" and "List Waypoints" requests
   - Look for a waypoint with a marketplace and ship looking to purchase a good being sold at the first marketplace
3. Use the "Purchase Cargo" request to buy goods
   - You'll need to specify your ship symbol in the params section, the trade symbol (type of good, for example JEWELRY), and the number of units in the request body
4. Verify your cargo by checking your ship's cargo hold

### Step 4: Navigate and Sell for Profit (2 minutes)
1. Orbit your ship, using the appropriate endpoint, to take off from your current location
2. Use the "Navigate Ship" request to travel to the second marketplace
   - You'll need to specify your ship symbol and the destination waypoint
3. Wait for your ship to arrive at the destination (check ship nav status)
4. Dock your ship at the new location
5. Use the "Sell Cargo" request to sell your goods at the second marketplace
   - You'll need to specify your ship symbol, the trade symbol, and the number of units
6. Check your updated credit balance using the "My Agent Details" request

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
    - This is a RESTful API, which means it follows the REST principles. Well, mostly, as do most REST APIs.
- Some actions have cooldown periods, check the ship's status if an action fails

## Group Quiz (2 minutes)
Discuss some of these questions as a group after completing the exercise:

1. **REST Principles**: What REST principles did you observe in the SpaceTraders API? How did the API organize resources and use HTTP methods? What endpoints don't seem to follow REST principles?

2. **Authentication**: What did you do to authenticate yourself with the API?

3. **Resource Relationships**: How does the API represent relationships between resources (e.g., between ships and waypoints)? Did you notice any examples of HATEOAS?

4. **Status Codes**: What HTTP status codes did you encounter? What did each one indicate about your request?

5. **API Design**: If you were designing this API, what might you do differently? Are there any endpoints you would add or change?

6. **Error Handling**: Did you encounter any errors? How did the API communicate what went wrong?

7. **Real-world Applications**: How do the concepts in this exercise apply to real-world API development in products you may have seen, or projects you want to develop?
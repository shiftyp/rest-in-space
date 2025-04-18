# SpaceTraders API Exercise (10 minutes)

## Overview
In this quick exercise, we'll explore the SpaceTraders API as a group using Swagger UI to understand RESTful API concepts and how to interact with an API over HTTP. At the end you'll chat in smaller groups about the exercise.

## Learning Objectives
- Understand RESTful API structure and authentication
- Learn how to chain API requests to accomplish a goal
- Experience working with a real-world API that follows REST principles
- Observe how API responses contain links to related resources

## Prerequisites
- Swagger UI (included in the project)
- SpaceTraders.io account (we'll create this in the setup)

## Setup (2 minutes)

### Register for SpaceTraders.io
1. Visit [my.spacetraders.io](https://my.spacetraders.io) and create an account
2. After registering, navigate "Settings", and generate a new account token, giving it a name such as "swagger"
3. Copy the token to use with Swagger UI

### Set Up Swagger UI
1. Navigate to the `space-traders` directory in your terminal:
  ```bash
  cd space-traders
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

4. Visit http://localhost:3001 (Or the proxied URL from Firebase Studio) in your browser to see the welcome message
5. Open the Swagger UI interface in your browser
6. Authorize with your API token by clicking the 'Authorize' button
7. Enter your Account Token into the appropriate field

## Our Task

### Step 1: Register a New Agent
1. Open the "Register New Agent" request
2. In the request body, replace the symbol with a unique name (e.g., `"symbol": "YOUR_CALLSIGN"`) and input a faction of `COSMIC`
3. Send the request
4. From the response, copy your agent token and set it as the AgentToken under Authorization
   - Note: This agent token is different from your user API key and is specific to this agent

### Step 2: Explore Your Agent
1. Find and send the "My Agent Details" request
2. Note your starting credits and headquarters location
3. The location should look like this: X1-TF9-A1
   - NOTE: It has three parts, with the first two parts identifying the system (X1-TF9), and all three parts comprise the waypoint symbol, or a specific place in a specific system (X1-TF9-A1)
4. List your ships, and make note of the symbol of your Frigate ship (it should be your agent callsign postfixed by "-1", so "YOUR_CALLSIGN-1")

### Step 3: Purchase Goods at a Marketplace
1. Find a marketplace using the "Get Market" request
   - Note: You'll need to provide a system symbol and waypoint symbol where a market exists. Your starting location should have a marketplace (For example, system X1-TF9, waypoint X1-TF9-A1)
2. Find another marketplace using the "Get Market" and "List Waypoints" requests
   - Note: Look for a waypoint with a marketplace and ship looking to purchase a good being sold at the first marketplace
3. Use the "Purchase Cargo" request to buy goods
   - NOTE: You'll need to specify your ship symbol in the params section, the trade symbol (type of good, for example JEWELRY), and the number of units in the request body
4. Verify your cargo by checking your ship's cargo hold

### Step 4: Navigate and Sell for Profit
1. Orbit your ship, using the appropriate endpoint, to take off from your current location
2. Use the "Navigate Ship" request to travel to the second marketplace
   - NOTE: You'll need to specify your ship symbol and the destination waypoint
3. Wait for your ship to arrive at the destination (check ship nav status)
4. Dock your ship at the new location
5. Use the "Sell Cargo" request to sell your goods at the second marketplace
   - NOTE: You'll need to specify your ship symbol, the trade symbol, and the number of units
6. Check your updated credit balance using the "My Agent Details" request

## Group Questions
Discuss some of these questions in your breakout group after completing the exercise:

1. **REST Principles**: What REST principles did you observe in the SpaceTraders API? How did the API organize resources and use HTTP methods? What endpoints don't seem to follow REST principles?

2. **Authentication**: What did you do to authenticate yourself with the API?

3. **Resource Relationships**: How does the API represent relationships between resources (e.g., between ships and waypoints)? Did you notice any examples of HATEOAS?

4. **Status Codes**: What HTTP status codes did you encounter? What did each one indicate about your request?

5. **API Design**: If you were designing this API, what might you do differently? Are there any endpoints you would add or change?

6. **Error Handling**: Did you encounter any errors? How did the API communicate what went wrong?

7. **Real-world Applications**: How do the concepts in this exercise apply to real-world API development in products you may have seen, or projects you want to develop?
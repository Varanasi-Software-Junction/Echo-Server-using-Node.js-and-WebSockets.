# echoserver

Node CLI commands
Here's a list of commonly used CLI commands for Node.js along with explanations:

### 1. **`node <file>`**
   - **Usage:** `node app.js`
   - **Explanation:** Executes the specified JavaScript file using the Node.js runtime. This is the primary way to run Node.js scripts.

### 2. **`npm init`**
   - **Usage:** `npm init`
   - **Explanation:** Initializes a new Node.js project, creating a `package.json` file where you can define your project's metadata, dependencies, scripts, and more.
   - **Options:**
     - `npm init -y`: Automatically answers "yes" to all prompts, creating a `package.json` with default values.

### 3. **`npm install <package>`**
   - **Usage:** `npm install express`
   - **Explanation:** Installs a package (like `express`) into the `node_modules` directory of your project. The package is also added to your `package.json` file under `dependencies`.
   - **Options:**
     - `npm install <package> --save-dev`: Adds the package to `devDependencies`.
     - `npm install <package> -g`: Installs the package globally, making it available system-wide.

### 4. **`npm uninstall <package>`**
   - **Usage:** `npm uninstall express`
   - **Explanation:** Removes a package from your project and updates `package.json` accordingly.

### 5. **`npm update`**
   - **Usage:** `npm update`
   - **Explanation:** Updates all the packages listed in your `package.json` to their latest versions that are allowed by the versioning rules specified.

### 6. **`npm start`**
   - **Usage:** `npm start`
   - **Explanation:** Runs the `start` script defined in your `package.json`. Commonly used to start the main application.

### 7. **`npm run <script>`**
   - **Usage:** `npm run build`
   - **Explanation:** Runs any script defined in your `package.json` under the `scripts` section. For example, `npm run build` might run a build process.

### 8. **`npm test`**
   - **Usage:** `npm test`
   - **Explanation:** Runs the `test` script defined in your `package.json`, typically used to run automated tests.

### 9. **`npm list`**
   - **Usage:** `npm list`
   - **Explanation:** Lists all installed packages and their dependencies in the current project.
   - **Options:**
     - `npm list --depth=0`: Lists only top-level packages.
     - `npm list -g`: Lists globally installed packages.

### 10. **`npm outdated`**
   - **Usage:** `npm outdated`
   - **Explanation:** Shows a list of packages that are outdated, meaning there are newer versions available than what is currently installed.

### 11. **`npm cache clean`**
   - **Usage:** `npm cache clean --force`
   - **Explanation:** Clears the npm cache. This can help resolve issues with corrupted packages or failed installs.

### 12. **`npm audit`**
   - **Usage:** `npm audit`
   - **Explanation:** Scans your project for vulnerabilities in installed packages and suggests possible fixes.
   - **Options:**
     - `npm audit fix`: Automatically attempts to fix any vulnerabilities found.

### 13. **`npm ci`**
   - **Usage:** `npm ci`
   - **Explanation:** Installs dependencies from the `package-lock.json` file, providing a faster and more deterministic install compared to `npm install`.

### 14. **`npm version <newversion>`**
   - **Usage:** `npm version patch`
   - **Explanation:** Bumps the version number in `package.json` and creates a Git commit with the new version.
   - **Options:**
     - `npm version patch`: Increments the patch version (e.g., 1.0.0 -> 1.0.1).
     - `npm version minor`: Increments the minor version (e.g., 1.0.0 -> 1.1.0).
     - `npm version major`: Increments the major version (e.g., 1.0.0 -> 2.0.0).

### 15. **`npm rebuild`**
   - **Usage:** `npm rebuild`
   - **Explanation:** Rebuilds any native addons that are installed with npm, useful after Node.js version upgrades.

### 16. **`npx <command>`**
   - **Usage:** `npx create-react-app my-app`
   - **Explanation:** Executes a package binary without the need to install it globally. This is particularly useful for running one-time commands or using CLI tools that you don’t want to install globally.

### 17. **`node -v` or `npm -v`**
   - **Usage:** `node -v` or `npm -v`
   - **Explanation:** Displays the current version of Node.js or npm installed on your system.

### 18. **`npm init <initializer>`**
   - **Usage:** `npm init react-app my-app`
   - **Explanation:** Runs a package to set up a new project, similar to using `npx`, but with initialization options.

### 19. **`npm link`**
   - **Usage:** `npm link`
   - **Explanation:** Creates a symlink to a package, allowing you to easily work on local packages and test them as if they were installed globally.

### 20. **`npm config`**
   - **Usage:** `npm config set registry https://registry.npmjs.org/`
   - **Explanation:** Manages the npm configuration. You can set or get various configuration options, such as the registry URL, proxy settings, etc.

This list covers the most common CLI commands you’ll use when working with Node.js and npm. These commands will help you manage your Node.js projects efficiently, from installing packages to running scripts and managing versions.
 
The `ws` object provided by the `ws` library in Node.js offers several facilities for managing WebSocket connections. Below is a detailed explanation of these facilities, along with use case examples:

### 1. **WebSocket Server (`WebSocket.Server`)**
   - **Purpose:** Creates a WebSocket server that listens for connections.
   - **Usage:**
     ```javascript
     const WebSocket = require('ws');
     const server = new WebSocket.Server({ port: 8080 });
     ```
   - **Use Case Example:** You want to create a real-time chat application where clients can connect to the server and send messages to each other. The WebSocket server will listen for incoming connections and messages.

### 2. **Handling Client Connections (`'connection'` event)**
   - **Purpose:** Triggered when a client connects to the WebSocket server.
   - **Usage:**
     ```javascript
     server.on('connection', (ws) => {
       console.log('Client connected');
     });
     ```
   - **Use Case Example:** You want to log or handle actions when a new user connects to your WebSocket server, such as sending a welcome message or updating the user list.

### 3. **Handling Incoming Messages (`'message'` event)**
   - **Purpose:** Triggered when the server receives a message from a client.
   - **Usage:**
     ```javascript
     ws.on('message', (message) => {
       console.log(`Received: ${message}`);
     });
     ```
   - **Use Case Example:** In a collaborative text editor, when a user types something, the message is sent to the server, which then broadcasts it to all other connected users.

### 4. **Sending Messages (`ws.send()`)**
   - **Purpose:** Sends a message to the connected client or server.
   - **Usage:**
     ```javascript
     ws.send('Hello, client!');
     ```
   - **Use Case Example:** After processing a client's request, the server sends a response back to the client. For example, in a game server, after receiving a player's move, the server might send the updated game state back to the client.

### 5. **Handling Connection Closure (`'close'` event)**
   - **Purpose:** Triggered when a client disconnects from the server.
   - **Usage:**
     ```javascript
     ws.on('close', () => {
       console.log('Client disconnected');
     });
     ```
   - **Use Case Example:** In a multiplayer game, when a player disconnects, you might want to update the game state to reflect that the player has left or notify other players.

### 6. **Handling Errors (`'error'` event)**
   - **Purpose:** Triggered when an error occurs on the WebSocket connection.
   - **Usage:**
     ```javascript
     ws.on('error', (error) => {
       console.error('WebSocket error:', error);
     });
     ```
   - **Use Case Example:** You want to handle network issues or other errors that might occur during a WebSocket session, such as logging them or attempting to reconnect.

### 7. **Broadcasting to All Clients**
   - **Purpose:** Send a message to all connected clients.
   - **Usage:**
     ```javascript
     server.clients.forEach((client) => {
       if (client.readyState === WebSocket.OPEN) {
         client.send('Hello, everyone!');
       }
     });
     ```
   - **Use Case Example:** In a chat application, when one user sends a message, you want to broadcast that message to all other connected users.

### 8. **Checking Connection State (`ws.readyState`)**
   - **Purpose:** Checks the current state of the WebSocket connection.
   - **Usage:**
     ```javascript
     if (ws.readyState === WebSocket.OPEN) {
       ws.send('The connection is open');
     }
     ```
   - **Use Case Example:** Before sending a message, you might want to ensure that the connection is still open to avoid errors.

   **States:**
   - `WebSocket.CONNECTING`: The connection is not yet open.
   - `WebSocket.OPEN`: The connection is open and ready to communicate.
   - `WebSocket.CLOSING`: The connection is in the process of closing.
   - `WebSocket.CLOSED`: The connection is closed.

### 9. **WebSocket Ping/Pong (`ws.ping()` and `ws.pong()`)**
   - **Purpose:** Helps keep the connection alive by sending a ping message, and the other side responds with a pong message.
   - **Usage:**
     ```javascript
     ws.ping();
     ws.on('pong', () => {
       console.log('Received pong from client');
     });
     ```
   - **Use Case Example:** In a WebSocket server, you might use pings to detect and close stale connections that are no longer active.

### 10. **Custom Protocols (`ws.protocol`)**
   - **Purpose:** Specifies subprotocols to be used with the WebSocket connection.
   - **Usage:**
     ```javascript
     const ws = new WebSocket('ws://localhost:8080', 'my-protocol');
     console.log(ws.protocol); // Outputs the agreed-upon subprotocol
     ```
   - **Use Case Example:** When connecting to a server that supports multiple subprotocols (like different versions of an API), you can specify which protocol to use.

### 11. **Binary Data Handling**
   - **Purpose:** WebSockets can send and receive binary data (e.g., `ArrayBuffer`, `Buffer`).
   - **Usage:**
     ```javascript
     ws.on('message', (data) => {
       if (Buffer.isBuffer(data)) {
         console.log('Received binary data');
       }
     });
     ```
   - **Use Case Example:** In a video streaming application, you might send video frames as binary data over a WebSocket connection.

### 12. **WebSocket Close (`ws.close()`)**
   - **Purpose:** Gracefully closes the WebSocket connection.
   - **Usage:**
     ```javascript
     ws.close(1000, 'Closing connection');
     ```
   - **Use Case Example:** In a chat application, when a user logs out, the client might close the WebSocket connection to clean up resources.

### 13. **Server Options**
   - **Purpose:** Customize the WebSocket server with various options.
   - **Example:**
     ```javascript
     const server = new WebSocket.Server({ 
       port: 8080,
       clientTracking: true, // Tracks connected clients
       verifyClient: (info, done) => { /* custom authentication */ done(true); }
     });
     ```
   - **Use Case Example:** You might use `verifyClient` to authenticate clients before allowing them to connect to the WebSocket server, enhancing security.

### 14. **WebSocket URL and Options**
   - **Purpose:** Connect to a WebSocket server using a URL and optional settings.
   - **Usage:**
     ```javascript
     const ws = new WebSocket('ws://localhost:8080', {
       perMessageDeflate: false, // Disable per-message deflate compression
     });
     ```
   - **Use Case Example:** You might want to configure the WebSocket connection with specific options, such as disabling compression for certain types of data to reduce CPU usage.

### Summary of Use Cases

- **Real-Time Applications:** Chat applications, live notifications, multiplayer games.
- **Streaming Data:** Video or audio streaming, real-time updates.
- **Monitoring:** Server health checks, real-time monitoring dashboards.
- **Collaboration Tools:** Collaborative text editors, whiteboard applications.
- **IoT:** Communication between IoT devices and servers.

The `ws` object provides powerful tools to build and manage real-time WebSocket applications. With the facilities described above, you can handle connections, send and receive messages, manage binary data, and ensure robust communication between clients and servers.
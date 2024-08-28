// Import the WebSocket library
const WebSocket = require('ws');

// Create a new WebSocket server on port 8080
const server = new WebSocket.Server({ port: 8080 });

console.log('WebSocket server is running on ws://localhost:8080');

// Handle connection events
server.on('connection', (ws) => {
  console.log('Client connected');

  // Handle incoming messages
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    
    // Echo the received message back to the client
    ws.send(`Received: ${message}`);
  });

  // Handle connection close
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

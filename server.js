const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');

// const port = process.env.port || 3000;
const port = process.env.BACKEND_URL || 3000;

const app = express();

const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, 'public')));

server.listen(port, () => console.log(`Client server is running on port ${port}`));
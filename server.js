const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');

const port = process.env.PORT || 80;

const app = express();

const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, 'public')));

server.listen(port, () => console.log(`Client server is running on port ${port}`));
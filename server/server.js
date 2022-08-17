/** IMPORT MODULES */
const express = require('express');
const app = express();
const http = require('http');
const { resolve } = require('path');
const server = http.createServer(app);
const socketServer = require('socket.io').Server;
const io = new socketServer(server);
const cors = require('cors');

// DEFINE PORT
const PORT = process.env.PORT || 3035;

/** IMPORT UTILS */


/** REQUIRE ROUTERS */


/** HANDLE PARSING REQUEST BODY FOR JSON AND URL */
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** HANDLE REQUESTS FOR STATIC FILES */
app.use(express.static(resolve(__dirname, '../client/stylesheets/styles.css')));

/** DEFINE ROUTE HANDLERS */


/** ROUTE HANDLER TO RESPOND WITH MAIN APP */
app.get('/', (request, response) => {
  return response.sendFile(resolve(__dirname, '../client/index.html'));
});

/** CATCH-ALL ROUTE HANDLER FOR ANY REQUESTS TO AN UNKNOWN ROUTE */
app.use('*', (request, response) => {
  response.status(404).send('Error: Page not found');
});

/** CONFIGURE EXPRESS GLOBAL ERROR HANDLER */
app.use((error, request, response, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, { error: error });
  response.status(errorObj.status).json(errorObj.message.err);
});

/** RUN WEBSOCKET WHEN CLIENT CONNECTS TO CHATROOM */
// io.on('connection', (socket) => {
//   // RUNS WHEN CLIENT CONNECTS
//   console.log('User has connected to server...');
//   socket.emit('connection', 'This is a message from the server...');
//   socket.on('client response', (socket) => {
//     console.log(socket);
//   });
//
//   // RUNS WHEN CLIENT DISCONNECTS
//   socket.on('disconnect', () => {
//     console.log('User has disconnected...');
//   });
// });

/** START THE SERVER AND LISTEN FOR CLIENT REQUESTS */
app.listen(PORT, () => {
  console.log(`Server connected. Listening on port: ${PORT}.`);
});


module.exports = app;
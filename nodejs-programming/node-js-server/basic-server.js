// basic node js server
// import http module
const http = require("http");

// create server
// request  :: client send a data to server
// response :: server send data to client
const server = http.createServer((request, response) => {
  // send data to browser
  response.write("Welcome to node js"); // send data to browser
  response.end(); // close the connection
});

// assign a port number to server
// server will listener a request from frontEnd
server.listen(3008, () => {
  console.log("server is running on port :: ", 3008);
});

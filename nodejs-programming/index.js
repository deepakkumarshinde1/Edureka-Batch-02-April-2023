// basic node js server
// import http module
const http = require("http");
const { readPublicFile } = require("./readStaticFiles");
// create server
// request  :: client send a data to server
// response :: server send data to client
const server = http.createServer((request, response) => {
  if (request.url !== "/favicon.ico") {
    switch (request.url) {
      case "/":
        response.write(readPublicFile("index")); // send data to browser
        break;

      case "/about":
        response.write(readPublicFile("about")); // send data to browser
        break;

      case "/our-project":
        response.write(readPublicFile("our-project")); // send data to browser
        break;

      default:
        response.write("Page you request is not available"); // send data to browser
        break;
    }
    response.end(); // close the connection
  }
});

// assign a port number to server
// server will listener a request from frontEnd
server.listen(3008, () => {
  console.log("server is running on port :: ", 3008);
});

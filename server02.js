// Require/import the HTTP module
// This, in essence, is a package ("small box") 
//which allows our server ("big box") to have the 
//capability of handling http requests and responses. 
//HTTP is package that comes with the standard Node library.
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 7000;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  //res.send() will send the HTTP response
  //res.end() will end the response process.
  response.end("It Works!! Path Hit: " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

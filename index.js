// Creating First Node JS Server

// STEP 1:- import HTTP module to use HTTP functionalities
const http = require('node:http');
// STEP 2:- define port on which the server will run
const port = 8000; 



// STEP 3:- Create HTTP server

const server = http.createServer();

// STEP 4:- make server listen on configured port

server.listen(port, function(err){
    if (err){
        console.log(err);
        return
    } else{
        console.log("The server is up and running on port: ", port)
    }
});
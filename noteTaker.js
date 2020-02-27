//dependencies
const fs = require("fs");
const path = require("path");
const express = require("express");
const http = require("http");
//Set up ExPress
const PORT = 8080;
const app = express();
const server = http.createServer(handleRequest);


//Start the server and begin listening
server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});


function handleRequest(req, res){
    let path = req.url;

    switch (path) {

        case"/*":
            return fs.readFile(__dirname + "/develop/public/index.html", function(err, data) {
                if (err) throw err;
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(data);
            });

        case"/notes":
            return fs.readFile(__dirname + "/develop/public/notes.html", function(err, data){
                if (err) throw err;
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(data)
            })
    
    };
}   

//dependencies
const fs = require("fs");
const path = require("path");
const express = require("express");
const http = require("http");

//Set up Express server
const PORT = 8080;
const app = express();
// const server = http.createServer(handleRequest);

app.use(express)

//HTML requests

app.get("/develop/public/notes.html", function (req, res){
    res.sendFile(path.join(__dirname, 'public', 'notes.html'))
})

//Start the server and begin listening
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});


// function handleRequest(req, res){
//     let path = req.url;

//     switch (path) {

//         case"/*":
//             return fs.readFile(__dirname + "/develop/public/index.html", function(err, data) {
//                 if (err) throw err;
//                 res.writeHead(200, {"Content-Type": "text/html"});
//                 res.end(data);
//             });

//         case"/notes":
//             return fs.readFile(__dirname + "/develop/public/notes.html", function(err, data){
//                 if (err) throw err;
//                 res.writeHead(200, {"Content-Type": "text/html"});
//                 res.end(data)
//             })
    
//     };
// }   

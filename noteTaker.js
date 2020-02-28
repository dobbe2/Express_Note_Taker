//required npms and dependencies
const fs = require("fs");
const path = require("path");
const express = require("express");
// const http = require("http");
const notes = require("./Develop/db/db.js")
//Set up Express server
const PORT = 8080;
const app = express();

//create the notes data

// let notes= [];

//HTML requests
app.get('/notes', function (req,res){
    res.sendFile(path.join(__dirname, "Develop/public/notes.html"));
    console.log("html get note")
})

app.get("*", function (req, res){
    res.sendFile(path.join(__dirname, "Develop/public/index.html"))
})


//API routes
//  /api/notes GET- read JSON file and return all saved JSON notes
app.get("/api/notes", (req,res) => {
    res.json(notes)
    console.log(notes)
    notes = JSON.parse(notes);
});

// //  /api/notes POST- recieve new note and save onto the request body, add to db.json, then return new note to client
// app.post("/api/notes", function (req,res){
//     notes.push(req.body);
// })
//  /api/notes/:id DELETE

//Start the server and begin listening
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});
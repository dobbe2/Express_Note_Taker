//required npms and dependencies
const fs = require("fs");
const path = require("path");
const express = require("express");

//Set up Express server
const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//API routes
//  /api/notes GET- read JSON file and return all saved JSON notes (savedNotes)
app.get("/api/notes", (req, result) => {
    fs.readFile("db/db.json", "utf8", function (err, notes) {
        result.json(JSON.parse(notes))
        console.log(notes)
    })

});

//  /api/notes POST- recieve new note and save onto the request body, add to db.json, then return new note to client
app.post("/api/notes", function (req, res) {
    fs.readFile("db/db.json", "utf8", function (err, notes) {
        let notesArray = JSON.parse(notes)
        console.log(notesArray)
        let noteid = notesArray.length != 0 ? notesArray[notesArray.length - 1].id + 1 : 0;
        let obj = {
            title: req.body.title,
            text: req.body.text,
            id: noteid
        }
        notesArray.push(obj)
        fs.writeFile("db/db.json", JSON.stringify(notesArray), function (err, data) {
            res.json("done")
        })

    })
})

//  /api/notes/:id DELETE
app.delete("/api/notes/:noteId", function (req, res) {
    console.log(req.params)
    fs.readFile("db/db.json", "utf8", function (err, notes) {
        let notesArray = JSON.parse(notes)

        let notesTemp = []
        for (var i = 0; i < notesArray.length; i++) {
            if (notesArray[i].id !== parseInt(req.params.noteId)) {
                notesTemp.push(notesArray[i])
            }
        }
        fs.writeFile("db/db.json", JSON.stringify(notesTemp), function (err, data) {
            res.json("done")
        })

    })
})

//HTML requests
app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
})

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"))

})

//Start the server and begin listening
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
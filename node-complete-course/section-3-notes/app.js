console.log("Starting App.js");

const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const argv = require("yargs").argv;


const notes = require("./notes");


let command = process.argv[2];

if (command === "add") {
    notes.addNote(argv.title,argv.body);
}
else if (command === "delete") {
    notes.deleteNote(argv.title);
    
}
else if (command === "read") {
    notes.readNote(argv.title);
    
}
else if (command === "list") {
    notes.getAll();
    
} else {
    console.log("command not found");
    
}
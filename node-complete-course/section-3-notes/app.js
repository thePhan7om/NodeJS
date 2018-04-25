console.log("Starting App.js");

const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const argv = require("yargs").argv;


const notes = require("./notes");


let command = process.argv[2];

if (command === "add") {
  let note =   notes.addNote(argv.title,argv.body);
    if(note){
        console.log("Note created");
        console.log("--");
        console.log(`Title ${note.title}`);
    }else{
        console.log("Note Title taken");
    }
}
else if (command === "delete") {
   let removed = notes.deleteNote(argv.title);
   if(removed){
       console.log("Note not removed");
    
       
   }else{
       console.log("Note removed");
       console.log("--");
       console.log(`Title ${argv.title}`);
   }
    
}
else if (command === "read") {
    notes.readNote(argv.title);
    
    let read = notes.readNote(argv.title);
    if(read){
        console.log(` Note - ${read.title}`);
        console.log("--");
        console.log(`Body ${read.body}`);
        
        
    }else{
       console.log("Note not found");
    }
    
    
}
else if (command === "list") {
    notes.getAll();
    
} else {
    console.log("command not found");
    
}

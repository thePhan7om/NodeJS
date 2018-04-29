var obj = {
  name:"Jordan"
};

var json = JSON.stringify(obj);
console.log (json);
console.log(obj.name);


var personString  = '{"name":"Jordan", "age":35}';

var json2 = JSON.parse(personString);
console.log (json2);
console.log(json2.name);

const fs = require('fs');
let originalNote =  {
    title:"Some Title",
    body :"Some Body"
};

let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

let newNoteString = fs.readFileSync('notes.json');

let newNoteCopy = JSON.parse(newNoteString);

console.log(newNoteCopy.title,newNoteCopy.body);
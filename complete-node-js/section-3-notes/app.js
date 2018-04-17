console.log('Starting App.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const notes = require('./notes');

let result = notes.addNote();
console.log(`${result}`)

result = notes.add(5,6);
console.log(`should be 11 === ${result}`);

let dups = [1,2,3,4,5,4,3,7,8];
let noDups = _.uniq(dups);
console.log(noDups);
//
//
// let user = os.userInfo().username;
//
// fs.appendFileSync('greetings.txt', `Hello ${user} You are ${notes.age}`  );
console.log('Starting notes.js');

var addNote = (title, body) => {
console.log("Add Node", title, body);
};

var getAll = () =>{
    console.log("Getting all notes");
}

var deleteNote = (title) =>{
    console.log("Deleting Note:", title);
}

var readNote = (title) =>{
    console.log("Reading Note:", title);
}


module.exports = {
    addNote,getAll,deleteNote,readNote,
}
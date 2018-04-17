console.log('Starting notes.js');
module.exports.age=25;

module.exports.addNote = () => {
    console.log('addNote');
    return 'new Note';
};

module.exports.add = (a, b) =>{
    let result = a+b;
    return result;
}
const uuid = require('uuid').v4;

var savedNotes = [{
    title: "test note",
    text: "This is a test note to see if this works",
    noteID: uuid()
}];

module.exports = savedNotes;
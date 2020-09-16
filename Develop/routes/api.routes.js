const uuid = require("uuid").v4;
const savedNotes = require("../data/saved.data");

//ROUTING
module.exports = (app) => {
    // API GET REQUESTS
    app.get('/api/notes', (req, res) => res.json(savedNotes))

    // API POST REQUESTS
    app.post('/api/notes', (req, res) => {
        const noteID = uuid();

        const data = {...req.body, noteID}

        savedNotes.push(data)
        res.json({ success: true, noteCreated: true });
    });

    // API DELETE REQUESTS
    app.delete('/api/notes/:id', (req, res) => {

        res.json({ success: true });
    });
}
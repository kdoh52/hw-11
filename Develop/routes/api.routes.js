// Dependencies
const uuid = require("uuid").v4;
const savedNotes = require("../db/db.json");

// ROUTING
module.exports = (app) => {
    // API GET REQUESTS
    app.get('/api/notes', (req, res) => res.json(savedNotes))

    // API POST REQUESTS
    app.post('/api/notes', (req, res) => {
        const id = uuid();

        const data = {...req.body, id}

        savedNotes.push(data)
        res.json({ success: true, noteCreated: true });
    });

    // API DELETE REQUESTS
    app.delete('/api/notes/:id', (req, res) => {
        let chosen = req.params.id;
        for (let i = 0; i < savedNotes.length; i++) {
            if (chosen === savedNotes[i].id) {
                savedNotes.splice(i, 1);
            }
        }
        res.json({ success: true });
    });
}
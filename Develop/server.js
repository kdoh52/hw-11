// Dependencies
const express = require("express");
const app = express();
const apiRoutes = require('./routes/api.routes');

const PORT = process.env.PORT || 3000;

// EXPRESS
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

apiRoutes(app);
require('./routes/html.routes')(app);

app.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
});
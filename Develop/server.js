const http = require("http");
const fs = require("fs");

const PORT = 3000;

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
    let path = req.url;

    switch (path) {
        case "/notes":
            return fs.readFile(__dirname + "/public/notes.html", function(err, data) {
                if (err) throw err;
                res.writeHead(200, {"Content-Type": "text/html"})
                res.end(data);
            });
        default:
            return fs.readFile(__dirname + "/public/index.html", function(err, data) {
                if (err) throw err;
                res.writeHead(200, {"Content-Type": "text/html"})
                res.end(data);
            });
    };
}

server.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
});
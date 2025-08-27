const http = require('http');
const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to my server! My name is Steve.");
    } else if (req.url === "/class") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Good luck in the class — keep learning!");
    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("This is a server built with Node.js.");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found —  That page does not exist.");
    }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
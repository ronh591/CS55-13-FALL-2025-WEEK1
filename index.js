const host = 'localhost';
const port = 8000;


const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server, my name is steve, good luck in the class");
};
    res.writeHead(200, { "Content-Type": "text/plain" });

    if (req.url === "/") {
        res.end("Welcome to my server! My name is Steve.");
    } else if (req.url === "/class") {
        res.end("Good luck in the class — keep learning!");
    } else if (req.url === "/about") {
        res.end("This is my first server built with Node.js.");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found —  That page does not exist.");
    }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
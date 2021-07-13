const http = require("http");
const url = require("url");
const {sendSshList} = require("./app/ssh");
const port = 4455;

const server = http.createServer(async (req, res) => {
    const parseUrl = url.parse(req.url, true);

    if (parseUrl.pathname === '/ssh/') {
        await sendSshList();
        res.writeHead(200, {'Content-type':'text/plain'});
        res.end();
    } else {
        res.writeHead(404, {'Content-type':'text/plain'});
        res.end();
    }
});

server.listen(port, () => {
    console.log("Tools server running");
});
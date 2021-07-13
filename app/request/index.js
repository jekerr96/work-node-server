const http = require("http");

module.exports = {
    sendPostRequest: (path, data) => {
        const sendOptions = {
            hostname: 'tools.192.office.sibirix.ru',
            port: 80,
            path: path,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(data),
            }
        };

        const req = http.request(sendOptions);

        req.write(data);
        req.end();
    },
}
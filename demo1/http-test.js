/**
 * Created by xingxiao05 on 17/5/19.
 */
const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    console.log(url.parse(req.url));
    res.end('hello world');
});

server.listen(port, hostname, () => {
    console.log("start in",hostname,port);
})
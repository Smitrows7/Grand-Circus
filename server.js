"use strict";
const http = require('http');
const port = 8888;
let i = 0;
http.createServer((req,res) => {
i++;
res.writeHead(200,{"Content-Type": "text/html"});
res.write("<h1>Hello my name is Suguna</h1>");
res.write("<p>You've visited "+ i + " times </p>");
res.end();

}).listen(port);

console.log("Listening on port http://localhost:"+port);
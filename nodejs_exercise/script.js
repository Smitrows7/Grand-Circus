"use strict";
const http = require('http');
const moment = require('moment');
const port = 8888;
const currDate = (new Date().toString());
const momentDate = moment().format("dddd [at] h:mma");
//let i = 0;
http.createServer((req,res) => {
//i++;
res.writeHead(200,{"Content-Type": "text/html"});
res.write("<h2>Current DateTime:"+currDate+"</h2>");
res.write("<h2>Moment DateTime:"+momentDate+"</h2>");
//res.write("<p>You've visited "+ i + " times </p>");
res.end();

}).listen(port);

console.log("Listening on port http://localhost:"+port);
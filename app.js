//declaring environment variables
const port=3000;

//declaring required libraries
var express = require('express');
const http = require('http');
var app = express();

const requestIp = require('request-ip');
const hostip = require('ip');

//defining public static repository
app.use(express.static('public'));

app.use(requestIp.mw());
const hostipAddress = hostip.address();

//adding ejs view engine
app.set('view engine', 'ejs');

//index page
app.get('/', function (req, res) {
    const ip = req.clientIp;
    if (ip.substr(0, 7) == "::ffff:") {
        ip = ip.substr(7)
    }
    var hostmessage = 'Welcome to this server hosted on: ' + hostipAddress;
    var message = 'I see you are browsing from: ' + ip;
    res.render("index.ejs", {
        ipmessage: message,
        hostipmessage: hostmessage
    });
    res.end(ip);
});

//index page
app.post('/', function (req, res) {
    const ip = req.clientIp;
    if (ip.substr(0, 7) == "::ffff:") {
        ip = ip.substr(7)
    }
    var hostmessage = 'Welcome to this server hosted on: ' + hostipAddress;
    var message = 'I see you are browsing from: ' + ip;
    res.render("index.ejs", {
        ipmessage: message,
        hostipmessage: hostmessage
    });
    //res.end(ip);
});

//Use this section only if creating a HTTP server
console.log('Server is on port ' + port); 
http.createServer({
}, app).listen(port);

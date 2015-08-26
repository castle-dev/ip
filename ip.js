var https = require('https');
var express = require('express');
var cors = require('cors');
var fs = require('fs');
var app = express();
app.use(cors());

var options = {
  key: fs.readFileSync(process.env.SSL_KEY_PATH),
  cert: fs.readFileSync(process.env.SSL_CERTIFICATE_PATH),
  ca: fs.readFileSync(process.env.SSL_CERTIFICATE_AUTHORITY_PATH)
};

app.get('/', function(req, res){
  console.log(req.connection.remoteAddress);
  res.send(req.connection.remoteAddress);
});

https.createServer(options, app) 
.listen(process.env.IP_SERVER_PORT, function () {
  console.log('Server listening on port', process.env.IP_SERVER_PORT);
});

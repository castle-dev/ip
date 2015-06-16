var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());

app.get('/', function(req, res){
  console.log(req.connection.remoteAddress);
  res.send(req.connection.remoteAddress);
});

app.listen(process.env.IP_SERVER_PORT, function () {
  console.log('Server listening');
});

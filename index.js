var http = require('http');
http.createServer(function (req, res) {

var xip = '';

  
http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
  resp.on('data', function(ip) {
    xip = ip
  });
});
    
    console.log(`Just got a request at ${req.url}!`)
    res.write(ip);
    res.end();
}).listen(process.env.PORT || 3000);

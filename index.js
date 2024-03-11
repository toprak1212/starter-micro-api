var http = require('http');
http.createServer(function (req, res) {


http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
  resp.on('data', function(ip) {
    console.log("My public IP address is: " + ip);
  });
});
    
    console.log(`Just got a request at ${req.url}!`)
    res.write('RX!');
    res.end();
}).listen(process.env.PORT || 3000);

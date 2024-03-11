var http = require("http");

var xip = "";
http.get({ host: "api.ipify.org", port: 80, path: "/" }, function (resp) {
  resp.on("data", function (ip) {
    xip = ip;
  });
});
http
  .createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`);
    res.write(xip);
    res.end();
  })
  .listen(process.env.PORT || 3000);

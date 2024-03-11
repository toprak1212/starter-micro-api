process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const WebSocket = require("ws");
var Centrifuge = require("centrifuge");
var wss_url = "wss://ws3.indodax.com/ws/";
var token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE5NDY2MTg0MTV9.UR1lBM6Eqh0yWz-PVirw1uPCxe60FdchR8eNVdsskeo";

var centrifuge = new Centrifuge(wss_url, {
  debug: true,
  websocket: WebSocket,
});
centrifuge.setToken(token);

const jsdom = require("jsdom");
const dom = new jsdom.JSDOM("");
const $ = require("jquery")(dom.window);

centrifuge.subscribe("chart:tick-dntidr", function (message) {
  console.log(message);
});
centrifuge.connect();

const express = require("express");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const PUBLIC_DIR = "public";
const STATIC_DIR = "static";
const timeout = require('connect-timeout')

var cors_proxy = require('cors-anywhere');

const app = express();

const net = require("net")

var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 808;

var cors_proxy = require('cors-anywhere');
let server = cors_proxy.createServer({
    originWhitelist: [],
  removeHeaders: [
    'cookie',
    'cookie2',
    // Strip Heroku-specific headers
    'x-request-start',
    'x-request-id',
    'via',
    'connect-time',
    'total-route-time',
    // Other Heroku added debug headers
    // 'x-forwarded-for',
    // 'x-forwarded-proto',
    // 'x-forwarded-port',
  ],
  redirectSameOrigin: true,
  httpProxyOptions: {
    // Do not add X-Forwarded-For, etc. headers, because Heroku already adds it.
    xfwd: false,
  },
}).listen(port, host, function() {
  console.log('Running CORS Anywhere on ' + host + ':' + port);
});


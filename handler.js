'use strict';
const { app } = require('./index');
const serverless_http = require("serverless-http");
module.exports.hello = serverless_http(app)
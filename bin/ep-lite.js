#!/usr/bin/env node

var etherpadLite = require('../index.js')
  , http = require('http')
  , port = process.argv[2] || 9002
  , server = http.createServer();
  
server.listen(port);
  
etherpadLite(server);

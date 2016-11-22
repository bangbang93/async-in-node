/**
 * Created by bangbang93 on 2016/11/22.
 */
'use strict';
const http = require('http');
const server = http.createServer(function(req, res){
  if (req.method == 'POST'){
    let body = '';
    req.on('data', function(chunk){
      body += chunk;
    });
    req.on('end', function(){
      req.body = body;

      res.end(req.body);
    });
  } else {
    res.end(req.method);
  }
});

server.listen(3000);
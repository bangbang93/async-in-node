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

      handleRequest(req, res);
    });
  } else {
    handleRequest(req, res);
  }
});

server.listen(3000);

function handleRequest(req, res){
  if (req.method == 'POST'){
    res.end(req.body);
  } else {
    res.end(req.method);
  }
}
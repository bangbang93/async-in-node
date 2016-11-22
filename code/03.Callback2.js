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

      if (body == 'err'){
        return handleRequest(new Error('client send error'));
      }

      handleRequest(null, {req, res});
    });
    req.on('aborted', function () {
      let err = new Error('client abort request');
      handleRequest(err)
    })
  } else {
    handleRequest(null, {req, res});
  }
});

server.listen(3000);

function handleRequest(err, {req, res} = {}){
  if (err) return console.error(err);
  if (req.method == 'POST'){
    res.end(req.body);
  } else {
    res.end(req.method);
  }
}
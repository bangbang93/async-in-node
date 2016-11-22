/**
 * Created by bangbang93 on 2016/11/22.
 */
'use strict';
const fs = require('fs');

let buffer;

fs.readFile('01.EventEmitter.js', function (err, data) {
  buffer = data;
  fs.readFile('02.Callback.js', function (err, data) {
    buffer = Buffer.concat([buffer, data]);
    fs.readFile('03.Callback2.js', function (err, data) {
      buffer = Buffer.concat([buffer, data]);
      fs.readFile('04.CallbackFS.js', function (err, data) {
        buffer = Buffer.concat([buffer, data]);
        console.log(buffer.toString());
      })
    })
  })
});
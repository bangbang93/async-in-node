/**
 * Created by bangbang93 on 2016/11/22.
 */
'use strict';
const async = require('async');
const fs = require('fs');

let files = ['01.EventEmitter.js', '02.Callback.js', '03.Callback2.js', '04.CallbackFS.js'];

async.map(files, fs.readFile, function (err, files) {
  let buffer = Buffer.concat(files);
  console.log(buffer.toString());
});
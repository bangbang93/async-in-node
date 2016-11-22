/**
 * Created by bangbang93 on 2016/11/22.
 */
'use strict';
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));


fs.readFileAsync('01.EventEmitter.js')
  .then((data)=>{
    return fs.readFileAsync('02.Callback.js');
  })
  .then((data)=>{
    console.log(data);
  });

Promise.all([
  fs.readFileAsync('01.EventEmitter.js'),
  fs.readFileAsync('02.Callback.js'),
  fs.readFileAsync('03.Callback2.js'),
]).then((res)=>{
  console.log(Buffer.concat(res).toString());
});
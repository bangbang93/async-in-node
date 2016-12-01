/**
 * Created by bangbang93 on 2016/12/1.
 */
'use strict';
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

const g = function*(){
  let EventEmitter = yield fs.readFileAsync('01.EventEmitter.js');
  let Callback = yield fs.readFileAsync('02.Callback.js');
};

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
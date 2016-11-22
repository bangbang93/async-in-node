/**
 * Created by bangbang93 on 2016/11/22.
 */
'use strict';
const thunk = require('thunks')();
const fs = require('fs');
const readFile = thunk.thunkify(fs.readFile);

// sequential
readFile('.gitignore')(function (error, res) {
  console.log(error, res);
  return readFile('01.EventEmitter.js')

})(function (error, res) {
  console.log(error, res);
  return readFile('02.Callback.js')

})(function (error, res) {
  console.log(error, res)
});

// parallel
thunk.all([
  readFile('01.EventEmitter.js'),
  readFile('02.Callback.js'),
  readFile('03.Callback2.js')
])(function (error, res) {
  console.log(Buffer.concat(res));
});

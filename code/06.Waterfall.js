/**
 * Created by bangbang93 on 2016/11/22.
 */
'use strict';
const async = require('async');

async.waterfall([
  function init(cb){
    return cb(null, 1);
  },
  function add2(data, cb){
    return cb(null, data + 2);
  },
  function mul5(data, cb){
    return cb(null, data * 5);
  }
], function (err, data) {
  console.log(data);
});
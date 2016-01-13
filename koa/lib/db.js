/**
 * Created by Rekey on 15/12/18.
 */
'use strict';
const mongoose = require('mongoose');
const config = require('../config.js');
const defer = Promise.defer();

console.time('connect');
mongoose.connect(config.db.url, function () {
  console.timeEnd('connect');
  defer.resolve();
});

module.exports = {
  init: function () {
    return defer.promise;
  }
};
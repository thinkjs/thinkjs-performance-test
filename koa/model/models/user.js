/**
 * Created by Rekey on 15/12/18.
 */
'use strict';
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  name: {
    'type': String
  },
  password: {
    'type': String
  }
});
module.exports = mongoose.model('user', userSchema);
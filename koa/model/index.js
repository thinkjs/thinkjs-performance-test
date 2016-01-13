/**
 * Created by Rekey on 15/12/18.
 */
'use strict';
const requireDir = require('../lib/require-dir.js');
const models = requireDir('./models', __dirname);
console.log('models init.');
module.exports = models;
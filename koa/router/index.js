/**
 * Created by Rekey on 15/12/18.
 */
'use strict';
const requireDir = require('../lib/require-dir.js');
function init() {
  console.log('router init.');
  requireDir('./routers', __dirname);
}
module.exports = {
  init: init
};
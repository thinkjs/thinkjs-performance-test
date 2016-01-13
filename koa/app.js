/**
 * Created by Rekey on 15/12/18.
 */
'use strict';
const Koa = require('koa');
const app = new Koa();
global.Application = app;

//const middleware = require('./middleware/index.js');
const router = require('./router/index.js');
const config = require('./config.js');
//const db = require('./lib/db.js');
const co = require('co');


// require('./model/index.js');
//middleware.init();
router.init();

co(function *() {
  try {
    //yield db.init();
    app.listen(config.port, config.ip);
    console.log('Application is run on', config.port);
  } catch (e) {
    console.error(e);
  }
});
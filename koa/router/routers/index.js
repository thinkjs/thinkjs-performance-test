/**
 * Created by Rekey on 15/12/18.
 */
'use strict';
const koaRouter = require('koa-router');
const router = new koaRouter();
const app = global.Application;

router.get('/', function *indexAction(next) {
  this.body = 'hello world';
  yield next;
});

app.use(router.routes());
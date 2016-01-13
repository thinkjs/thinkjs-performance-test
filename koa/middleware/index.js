/**
 * Created by Rekey on 15/12/18.
 */
'use strict';
const body = require('koa-better-body');
const app = global.Application;

function init() {
  console.log('middleware init.');
  //Response Time
  app.use(function *responseTime(next) {
    this.trace = {
      startTime: Date.now()
    };
    yield next;
    let delta = Math.ceil(Date.now() - this.trace.startTime);
    let xResponseTime = delta + 'ms';
    this.set('X-Response-Time', xResponseTime);
    //console.log(this.path, this.method, delta + 'ms');
    delta = null;
    xResponseTime = null;
  });
  //Http Request Body
  app.use(body({
    extendTypes: {
      // will parse application/x-javascript type body as a JSON string
      json: ['application/x-javascript'],
      multipart: ['multipart/mixed']
    }
  }));
}

module.exports = {
  init: init
};
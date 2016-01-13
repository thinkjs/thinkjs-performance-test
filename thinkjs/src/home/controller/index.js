'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    this.end('hello word');
    //auto render template file index_index.html
    //return this.display();
  }
}
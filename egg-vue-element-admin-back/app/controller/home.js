'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = ctx.helper.tokenInfo;
  }
}
module.exports = HomeController;

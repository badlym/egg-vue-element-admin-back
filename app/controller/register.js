'use strict';

const Controller = require('egg').Controller;

class RegisterController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.service.register.index();
    ctx.body = res;
  }
}
module.exports = RegisterController;

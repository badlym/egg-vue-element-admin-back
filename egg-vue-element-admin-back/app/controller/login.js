'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.service.login.find();
    ctx.body = res;
  }
}
module.exports = LoginController;

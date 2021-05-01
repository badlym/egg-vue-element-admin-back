'use strict';

const Controller = require('egg').Controller;

class UserInfoController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.service.userInfo.index();
    ctx.body = res;
  }
}
module.exports = UserInfoController;

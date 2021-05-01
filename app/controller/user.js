'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    // eslint-disable-next-line no-debugger
    const res = await ctx.service.user.index();
    ctx.status = 200;
    ctx.body = {
      data: {
        list: res.rows,
        total: res.count,
      },
    };
  }

  async create() {

    const { ctx } = this;
    const res = await this.ctx.service.user.create();
    ctx.body = {

      code: 0,
      msg: '新增成功',
      data: res,

    };


  }
}
module.exports = UserController;

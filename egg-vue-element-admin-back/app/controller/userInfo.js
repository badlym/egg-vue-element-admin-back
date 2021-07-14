'use strict';

const Controller = require('egg').Controller;

class UserInfoController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.service.userInfo.index();
    console.log(res.role);
    res.dataValues.roles = [];
    res.dataValues.roles.push(res.role.name);
    res.dataValues.introduction = res.role.description;
    console.log(res, '这就是res');
    ctx.body = {
      code: 0,
      message: '请求用户信息接口成功',
      data: res,
    };
  }
}

module.exports = UserInfoController;

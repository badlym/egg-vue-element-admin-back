'use strict';

const Controller = require('egg').Controller;

class UserInfoController extends Controller {
  async index() {
    const { ctx } = this;
    const roleResult = await ctx.service.userInfo.index();
    ctx.logger.info(roleResult, '请求用户信息接口');
    roleResult.dataValues.roles = [];
    roleResult.dataValues.roles.push(roleResult.role.name);
    roleResult.dataValues.introduction = roleResult.role.description;
    roleResult.dataValues.permissions = roleResult.dataValues.role.permissions;
    // roleResult.roles = [];
    // roleResult.roles.push(roleResult.role.name);
    // roleResult.introduction = roleResult.role.description;
    ctx.body = {
      code: 0,
      message: '请求用户信息接口成功',
      data: roleResult,
    };
  }
}

module.exports = UserInfoController;

// app/service/user.js
'use strict';
const Service = require('egg').Service;
class UserService extends Service {
  async index() {
    const { ctx } = this;
    const { current, limit, username } = ctx.query;
    const whereObj = {};
    if (username) {
      whereObj.username = username;

    }
    return await ctx.model.Users.findAndCountAll({ where: whereObj, limit: parseInt(limit), offset: (current - 1) * limit, order: [[ 'id', 'ASC' ]] });
  }
  async create() {
    const { ctx } = this;
    const data = ctx.request.body;
    data.createBy = ctx.helper.tokenInfo.data.username;
    // console.log(ctx.helper.tokenInfo, '创建者');
    // ctx.logger.debug(ctx.helper.tokenInfo.username);
    const user = await ctx.model.Users.create(data);
    return user;
  }
}
module.exports = UserService;

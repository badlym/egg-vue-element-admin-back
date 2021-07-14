// app/service/user.js

'use strict';

const Service = require('egg').Service;

class UserInfoService extends Service {
  async index() {
    const { ctx } = this;
    console.log(ctx.helper.tokenInfo);
    const result = await ctx.model.Users.findOne({
      where: {
        id: ctx.helper.tokenInfo.data.id,
      },
      // raw: false,
      include: {
        model: ctx.model.Roles,
      },
    });
    return result;

  }

}


module.exports = UserInfoService;

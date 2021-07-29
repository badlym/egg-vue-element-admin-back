// app/service/user.js

'use strict';

const Service = require('egg').Service;

class UserInfoService extends Service {
  async index() {
    const { ctx } = this;
    console.log(ctx.helper.tokenInfo);
    const result = await ctx.model.User.findOne({
      where: {
        id: ctx.helper.tokenInfo.data.id,
      },
      raw: false,
      include: {
        model: ctx.model.Role,
        include: {
          model: ctx.model.Permission,
          through: {
            attributes: [],
          },
        },
      },
    });
    return result;

  }

}


module.exports = UserInfoService;

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
      include: {
        model: ctx.model.Roles,
      },
    });
    if (result) {
      return {
        code: 0,
        msg: '查询成功',
        data: result,
      };
    }
    return {
      code: -1,
      data: {},
      msg: '无数据',
    };
  }

}


module.exports = UserInfoService;

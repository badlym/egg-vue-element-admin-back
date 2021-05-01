// app/service/user.js

'use strict';

const Service = require('egg').Service;
const baseController = require('../controller/base');
class LoginService extends Service {
  async find() {
    const { ctx } = this;
    console.log(ctx.request.body.username);
    const username = await ctx.model.Users.findOne({
      where: {
        username: ctx.request.body.username,
      },
    }
    );
    if (username) {
      const password = ctx.request.body.password;
      if (password) {
        const db = await ctx.model.Users.findOne({
          where: {
            password: ctx.request.body.password,
          },
        });
        if (db) {
          const token = ctx.helper.generateToken({ data: db });
          return {
            code: 0,
            msg: '操作成功',
            data: {
              token,
            },

          };
        }
        return {
          code: -1,
          msg: '密码错误',
          data: {},
        };
      }
      return {
        code: -1,
        msg: '请输入密码',
        data: {},
      };
    }
    return {
      code: '-1',
      msg: '用户名不存在',
      data: {},
    };

  }
}

module.exports = LoginService;

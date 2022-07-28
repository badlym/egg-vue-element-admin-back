// app/service/user.js

'use strict';

const Service = require('egg').Service;
class LoginService extends Service {
  async find() {
    const { ctx } = this;
    // const type = ctx.request.body.type;
    const username = await ctx.model.User.findOne({
      where: {
        username: ctx.request.body.username,
      },
    });
    const studentName = await ctx.model.Student.findOne({
      where: {
        username: ctx.request.body.username,

      },
    });
    const teacherName = await ctx.model.Teacher.findOne({
      where: {
        username: ctx.request.body.username,
      },
    });
    const password = ctx.request.body.password;
    if (username) {
      if (password) {
        const db = await ctx.model.User.findOne({
          where: {
            password: ctx.request.body.password,
            username: ctx.request.body.username,
          },
        });
        if (db) {
          const token = ctx.helper.generateToken({ data: db });
          return {
            code: 0,
            msg: '操作成功',
            data: {
              token,
              db,
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
    } else if (studentName) {

      if (password) {
        const db = await ctx.model.Student.findOne({
          where: {
            password: ctx.request.body.password,
            username: ctx.request.body.username,
          },
        });
        if (db) {
          const token = ctx.helper.generateToken({ data: db });
          return {
            code: 0,
            msg: '操作成功',
            data: {
              token,
              db,
            },

          };
        }
        return {
          code: -1,
          msg: '密码错误',
          data: {},
        };
      }
    } else if (teacherName) {
      if (password) {
        const db = await ctx.model.Teacher.findOne({
          where: {
            password: ctx.request.body.password,
            username: ctx.request.body.username,
          },
        });
        if (db) {
          const token = ctx.helper.generateToken({ data: db });
          return {
            code: 0,
            msg: '操作成功',
            data: {
              token,
              db,
            },

          };
        }
        return {
          code: -1,
          msg: '密码错误',
          data: {},
        };
      }
    } else {
      return {
        code: '-1',
        msg: '用户名不存在',
        data: {},
      };
    }


  }
  // 处理

}

module.exports = LoginService;

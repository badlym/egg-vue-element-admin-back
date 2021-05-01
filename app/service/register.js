// app/service/user.js

'use strict';
const utility = require('utility');// 密码加密
const Service = require('egg').Service;
const baseController = require('../controller/base');
class RegisterService extends Service {
  async index() {
    const { ctx } = this;
    this.code = '0';
    this.msg = '注册成功';
    this.data = {};
    return {
      code: this.code,
      msg: this.msg,
      data: this.data,
    };
    // const password = ctx.request.body.password;
    // return utility.md5(password);
  }
}

module.exports = RegisterService;

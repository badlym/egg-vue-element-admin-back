'use strict';
module.exports = {
  // 规则
  rules: {
    name: { type: 'string', required: true, message: '姓名不能为空' },
    avatar: { type: 'string', required: true, message: '头像不能为空' },
    phone: { type: 'string', required: true, message: '手机号不能为空' },
    username: { type: 'string', required: true, message: '用户名不能为空' },
    password: [
      { type: 'string', required: true, message: '密码不能为空' },
      { min: 6, max: 20, message: '密码只能在6到20位之间' },
    ],
  },
  // 场景
  scene: {
    create: [ 'username', 'password' ],
    update: [ 'id', 'username', 'password' ],
  },
};

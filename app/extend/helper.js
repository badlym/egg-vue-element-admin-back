
'use strict';
const bcrypt = require('bcryptjs');
module.exports = {

  /**
   * 密码加密助手函数
   * @param {String} password 原始密码
   * @return {String} 返回加密后的密码
   */
  bcryptData(password) {
    // 生成盐
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  },
  /**
   * 解密助手函数
   * @param {*} password 未加密的密码
   * @param {*} user_password 加密的密码
   * @return Promise 两个密码比对，比对成功返回true 失败返回 false
   */
  async comparePwd(password, user_password) {
    return await bcrypt.compare(password, user_password);
  },
  generateToken(value) {
    return this.app.jwt.sign(value, this.app.config.myJwt.secret, { expiresIn: '3days' });
  },
  // token里边携带的用户数据
  tokenInfo: null,
};

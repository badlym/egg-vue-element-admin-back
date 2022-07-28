
'use strict';
const bcrypt = require('bcryptjs');
const moment = require('moment');
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
  formatTime(time) {
    return moment(time).format('YYYY-MM-DD HH:mm:ss');
  },
  success({ ctx, res = null, msg = '请求成功' }) {
    ctx.body = {
      code: 0,
      data: res,
      msg,
    };
    // ctx.status = 200;
  },
  resError({ ctx, res = null, msg = '错误' }) {
    ctx.body = {
      code: -1,
      data: res,
      msg,
    };
  },
  jsonToObj(data) {
    return JSON.parse(JSON.stringify(data));
  },


  /**
   * 该方法用于将有父子关系的数组转换成树形结构的数组
   * 接收一个具有父子关系的数组作为参数
   * 返回一个树形结构的数组
   */
  translateDataToTree(data) {
    // 没有父节点的数据
    const parents = data.filter(
      value => value.parentId === 'undefined' || value.parentId === 0
    );
    // 有父节点的数据
    const children = data.filter(
      value =>
        value.parentId !== 'undefined' &&
            value.parentId != null &&
            value.parentId !== 0
    );
    // 定义转换方法的具体实现
    const translator = (parents, children) => {
      // 遍历父节点数据
      parents.forEach(parent => {
        // 遍历子节点数据
        children.forEach((current, index) => {
          // 此时找到父节点对应的一个子节点
          if (current.parentId === parent.id) {
            // 对子节点数据进行深复制，这里只支持部分类型的数据深复制，对深复制不了解的童靴可以先去了解下深复制
            const temp = JSON.parse(JSON.stringify(children));
            // 让当前子节点从temp中移除，temp作为新的子节点数据，这里是为了让递归时，子节点的遍历次数更少，如果父子关系的层级越多，越有利
            temp.splice(index, 1);
            // 让当前子节点作为唯一的父节点，去递归查找其对应的子节点
            translator([ current ], temp);
            // 把找到子节点放入父节点的children属性中
            typeof parent.children !== 'undefined'
              ? parent.children.push(current)
              : (parent.children = [ current ]);
          }
        });
      });
    };

    // 调用转换方法
    translator(parents, children);

    // 返回最终的结果
    return parents;
  },
  deepClone(source) {
    if (!source && typeof source !== 'object') {
      throw new Error('error arguments', 'deepClone');
    }
    const targetObj = source.constructor === Array ? [] : {};
    Object.keys(source).forEach(keys => {
      if (source[keys] && typeof source[keys] === 'object') {
        targetObj[keys] = this.deepClone(source[keys]);
      } else {
        targetObj[keys] = source[keys];
      }
    });
    return targetObj;
  },

  // 树形结构数据转单层数组形式
  jsonToArray(nodes) {
    let r = [];
    if (Array.isArray(nodes)) {
      for (let i = 0, l = nodes.length; i < l; i++) {
        r.push(nodes[i]); // 取每项数据放入一个新数组
        // 若存在children则递归调用，把数据拼接到新数组中，并且删除该children
        if (Array.isArray(nodes[i].children) && nodes[i].children.length > 0) {
          r = r.concat(this.jsonToArray(nodes[i].children));
        }
        delete nodes[i].children;
      }
    }
    return r;
  },
  RndNum: n => {
    let rnd = '';
    for (let i = 0; i < n; i++) {
      rnd += Math.floor(Math.random() * 10);
    }
    return rnd;
  },


};

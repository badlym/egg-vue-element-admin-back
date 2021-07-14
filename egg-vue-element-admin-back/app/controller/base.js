
'use strict';
const { Controller } = require('egg');
class BaseController extends Controller {
  success({
    code = 0,
    msg = '操作成功',
    data = {},
  } = {}) {

    return {
      code,
      msg,
      data,

    };

  }

  resError({ code = -1, msg = '服务器错误', data = {} } = {}) {
    return {
      code,
      msg,
      data,
    };
  }


}
module.exports = BaseController;

// 'use strict';
// module.exports = app => {
//   // 在中间件最前面统计请求时间
//   app.config.coreMiddleware.unshift('myJwt');
// };
'use strict';
class AppBootHook {
  constructor(app) {
    this.app = app;
  }
  configWillLoad() {
    // 此时 config 文件已经被读取并合并，但是还并未生效
    // 这是应用层修改配置的最后时机
    // 注意：此函数只支持同步调用
    require('module-alias/register');
    // 例如：参数中的密码是加密的，在此处进行解密
  }
}
module.exports = AppBootHook;

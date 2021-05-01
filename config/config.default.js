/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};


  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_19910204liu';

  // add your middleware config here
  // config.middleware = [ 'notfoundHandler' ];
  config.middleware = [ 'myJwt', 'errorHandler' ];
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  config.myJwt = { // jwt配置项
    enable: true,
    secret: 'love',
    ignore: [ '/api/login', '/api/register' ],
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'rm-2zequywp3r5z8she2uo.mysql.rds.aliyuncs.com',
      // 端口号
      port: '3306',
      // 用户名
      user: 'liuchengjin',
      // 密码
      password: 'adc@19910204liu',
      // 数据库名
      database: 'wmy_my_love',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 配置数据库连接
  /*
  *
  *  host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'root',
      database: 'egg_main',
  * */
  config.sequelize = {
    dialect: 'mysql',
    host: 'rm-2zequywp3r5z8she2uo.mysql.rds.aliyuncs.com',
    port: 3306,
    database: 'wmy_my_love',
    username: 'liuchengjin',
    password: 'adc@19910204liu',
    define: { // model的全局配置
      timestamps: true, // 添加create,update,delete时间戳
      paranoid: true, // 添加软删除
      freezeTableName: true, // 防止修改表名为复数
      underscored: true, // 防止驼峰式字段被默认转为下划线
    },
    timezone: '+8:00', // 由于orm用的UTC时间，这里必须加上东八区，否则取出来的时间相差8小时
    dialectOptions: { // 让读取date类型数据时返回字符串而不是UTC时间
      dateStrings: true,
      typeCast(field, next) {
        if (field.type === 'DATETIME') {
          return field.string();
        }
        return next();
      },
    },
  };
  // normal oss bucket
  config.oss = {
    /* LTAI5tM56necoroJS1jMyfQY
wHrQ22pDn3x8zdQ0OYnePfwW5HLsDG*/
    client: {
      accessKeyId: 'LTAI5tM56necoroJS1jMyfQY',
      accessKeySecret: 'wHrQ22pDn3x8zdQ0OYnePfwW5HLsDG',
      bucket: 'wmy-love',
      endpoint: 'oss-cn-beijing.aliyuncs.com',
      timeout: '60s',
    },
  };
  // 添加日志级别为debug
  config.logger = {
    level: 'DEBUG',
    outputJSON: true,
    encoding: 'utf-8',
    consoleLevel: 'DEBUG',
  };

  return {
    ...config,
    ...userConfig,
  };
};
/* sequelize-auto -h rm-2zequywp3r5z8she2uo.mysql.rds.aliyuncs.com -d wmy_my_love -u liuchengjin -x adc@19910204liu -p 3306
* rm-2zequywp3r5z8she2uo.mysql.rds.aliyuncs.com
*
*
* */

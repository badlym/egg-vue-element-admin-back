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
    credentials: true,
  };
  config.myJwt = { // jwt配置项
    enable: true,
    secret: 'love',
    ignore: [ '/api/login', '/api/register', '/swagger-ui.html' ],
  };
  config.security = {
    csrf: {
      enable: false,
    },
    // 白名单
    domainWhiteList: [ '*' ],
  };
  config.mysql = {
    // 单数据库信息配置
    // client: {
    //   // host
    //   host: 'rm-2zequywp3r5z8she2uo.mysql.rds.aliyuncs.com',
    //   // 端口号
    //   port: '3306',
    //   // 用户名
    //   user: 'liuchengjin',
    //   // 密码
    //   password: 'adc@19910204liu',
    //   // 数据库名
    //   database: 'egg-vue-element-admin-back',
    // },
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '19910204liu',
      // 数据库名
      database: 'egg-vue-element-admin-back',
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
  /*
  *
  *  ALTER USER 'root'@'localhost' IDENTIFIED BY '19910204liu';
  * */
  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'egg-vue-element-admin-back',
    username: 'root',
    password: '19910204liu',
    define: { // model的全局配置
      timestamps: false, // 添加create,update,delete时间戳
      paranoid: false, // 添加软删除
      freezeTableName: false, // 防止修改表名为复数
      underscored: true, // 防止驼峰式字段被默认转为下划线
      raw: true,
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
  // egg-swagger-doc 配置信息。
  config.swaggerdoc = {
    dirScanner: './app/controller', // 配置自动扫描的控制器路径。
    // 接口文档的标题，描述或其它。
    apiInfo: {
      title: 'NAPI', // 接口文档的标题。
      description: 'swagger-ui for NAPI document.', // 接口文档描述。
      version: '1.0.0', // 接口文档版本。
    },
    schemes: [ 'http', 'https' ], // 配置支持的协议。
    consumes: [ 'application/json' ], // 指定处理请求的提交内容类型（Content-Type），例如application/json, text/html。
    produces: [ 'application/json' ], // 指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回。
    securityDefinitions: { // 配置接口安全授权方式。
      // apikey: {
      //   type: 'apiKey',
      //   name: 'clientkey',
      //   in: 'header',
      // },
      // oauth2: {
      //   type: 'oauth2',
      //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
      //   flow: 'password',
      //   scopes: {
      //     'write:access_token': 'write access_token',
      //     'read:access_token': 'read access_token',
      //   },
      // },
    },
    enableSecurity: false, // 是否启用授权，默认 false（不启用）。
    // enableValidate: true,    // 是否启用参数校验，默认 true（启用）。
    routerMap: true, // 是否启用自动生成路由，默认 true (启用)。
    enable: true, // 默认 true (启用)。
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
  config.validatePlusNext = {
    resolveError(ctx, errors) {
      if (errors.length) {
        ctx.type = 'json';
        ctx.status = 400;
        ctx.body = {
          code: 400,
          error: errors,
          message: '参数错误',
        };
      }
    },
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

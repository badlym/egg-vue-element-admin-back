'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    enable: true,
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  oss: {
    enable: true,
    package: 'egg-oss',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  validatePlusNext: {
    enable: true,
    package: 'egg-validate-plus-next',
  },
  // 配置 egg-swagger-doc 插件信息。
  // swaggerdoc: {
  //   enable: false, // 是否启用。
  //   package: 'egg-swagger-doc', // 指定包名称。
  // },
  io: {
    enable: true,
    package: 'egg-socket.io',
  },
};

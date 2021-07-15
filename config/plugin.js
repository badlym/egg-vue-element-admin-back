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
  validatePlusNext: {
    enable: true,
    package: 'egg-validate-plus-next',
  },
};

// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBase = require('../../../app/controller/base');
import ExportHome = require('../../../app/controller/home');
import ExportLogin = require('../../../app/controller/login');
import ExportRegister = require('../../../app/controller/register');
import ExportRole = require('../../../app/controller/role');
import ExportUpload = require('../../../app/controller/upload');
import ExportUser = require('../../../app/controller/user');
import ExportUserInfo = require('../../../app/controller/userInfo');

declare module 'egg' {
  interface IController {
    base: ExportBase;
    home: ExportHome;
    login: ExportLogin;
    register: ExportRegister;
    role: ExportRole;
    upload: ExportUpload;
    user: ExportUser;
    userInfo: ExportUserInfo;
  }
}

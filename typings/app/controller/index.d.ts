// This file is created by egg-ts-helper@1.30.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBase = require('../../../app/controller/base');
import ExportCourse = require('../../../app/controller/course');
import ExportDept = require('../../../app/controller/dept');
import ExportDict = require('../../../app/controller/dict');
import ExportHome = require('../../../app/controller/home');
import ExportLogin = require('../../../app/controller/login');
import ExportPermission = require('../../../app/controller/permission');
import ExportRegister = require('../../../app/controller/register');
import ExportRole = require('../../../app/controller/role');
import ExportStudent = require('../../../app/controller/student');
import ExportUpload = require('../../../app/controller/upload');
import ExportUser = require('../../../app/controller/user');
import ExportUserInfo = require('../../../app/controller/userInfo');

declare module 'egg' {
  interface IController {
    base: ExportBase;
    course: ExportCourse;
    dept: ExportDept;
    dict: ExportDict;
    home: ExportHome;
    login: ExportLogin;
    permission: ExportPermission;
    register: ExportRegister;
    role: ExportRole;
    student: ExportStudent;
    upload: ExportUpload;
    user: ExportUser;
    userInfo: ExportUserInfo;
  }
}

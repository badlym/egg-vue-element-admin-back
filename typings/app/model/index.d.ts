// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportClass = require('../../../app/model/class');
import ExportCollege = require('../../../app/model/college');
import ExportRoles = require('../../../app/model/roles');
import ExportUsers = require('../../../app/model/users');
import ExportTestClass = require('../../../app/model/test/class');
import ExportTestColleges = require('../../../app/model/test/colleges');
import ExportTestPermission = require('../../../app/model/test/permission');
import ExportTestRoles = require('../../../app/model/test/roles');
import ExportTestSequelizemeta = require('../../../app/model/test/sequelizemeta');
import ExportTestStudents = require('../../../app/model/test/students');
import ExportTestUsers = require('../../../app/model/test/users');

declare module 'egg' {
  interface IModel {
    Class: ReturnType<typeof ExportClass>;
    College: ReturnType<typeof ExportCollege>;
    Roles: ReturnType<typeof ExportRoles>;
    Users: ReturnType<typeof ExportUsers>;
    Test: {
      Class: ReturnType<typeof ExportTestClass>;
      Colleges: ReturnType<typeof ExportTestColleges>;
      Permission: ReturnType<typeof ExportTestPermission>;
      Roles: ReturnType<typeof ExportTestRoles>;
      Sequelizemeta: ReturnType<typeof ExportTestSequelizemeta>;
      Students: ReturnType<typeof ExportTestStudents>;
      Users: ReturnType<typeof ExportTestUsers>;
    }
  }
}

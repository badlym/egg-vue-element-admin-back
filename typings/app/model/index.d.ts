// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportClass = require('../../../app/model/class');
import ExportCollege = require('../../../app/model/college');
import ExportDept = require('../../../app/model/dept');
import ExportPermission = require('../../../app/model/permission');
import ExportRole = require('../../../app/model/role');
import ExportRolePermission = require('../../../app/model/role_permission');
import ExportUser = require('../../../app/model/user');

declare module 'egg' {
  interface IModel {
    Class: ReturnType<typeof ExportClass>;
    College: ReturnType<typeof ExportCollege>;
    Dept: ReturnType<typeof ExportDept>;
    Permission: ReturnType<typeof ExportPermission>;
    Role: ReturnType<typeof ExportRole>;
    RolePermission: ReturnType<typeof ExportRolePermission>;
    User: ReturnType<typeof ExportUser>;
  }
}

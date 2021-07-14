// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportClass = require('../../../app/model/class');
import ExportCollege = require('../../../app/model/college');
import ExportRoles = require('../../../app/model/roles');
import ExportUsers = require('../../../app/model/users');

declare module 'egg' {
  interface IModel {
    Class: ReturnType<typeof ExportClass>;
    College: ReturnType<typeof ExportCollege>;
    Roles: ReturnType<typeof ExportRoles>;
    Users: ReturnType<typeof ExportUsers>;
  }
}

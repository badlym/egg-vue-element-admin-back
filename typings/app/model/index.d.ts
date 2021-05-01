// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportRoles = require('../../../app/model/roles');
import ExportUsers = require('../../../app/model/users');

declare module 'egg' {
  interface IModel {
    Roles: ReturnType<typeof ExportRoles>;
    Users: ReturnType<typeof ExportUsers>;
  }
}

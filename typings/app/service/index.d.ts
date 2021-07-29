// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportDept = require('../../../app/service/dept');
import ExportLogin = require('../../../app/service/login');
import ExportPermission = require('../../../app/service/permission');
import ExportRegister = require('../../../app/service/register');
import ExportRole = require('../../../app/service/role');
import ExportUser = require('../../../app/service/user');
import ExportUserInfo = require('../../../app/service/userInfo');

declare module 'egg' {
  interface IService {
    dept: AutoInstanceType<typeof ExportDept>;
    login: AutoInstanceType<typeof ExportLogin>;
    permission: AutoInstanceType<typeof ExportPermission>;
    register: AutoInstanceType<typeof ExportRegister>;
    role: AutoInstanceType<typeof ExportRole>;
    user: AutoInstanceType<typeof ExportUser>;
    userInfo: AutoInstanceType<typeof ExportUserInfo>;
  }
}

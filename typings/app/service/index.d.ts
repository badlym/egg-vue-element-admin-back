// This file is created by egg-ts-helper@1.30.4
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportCourse = require('../../../app/service/course');
import ExportDept = require('../../../app/service/dept');
import ExportDict = require('../../../app/service/dict');
import ExportLogin = require('../../../app/service/login');
import ExportPermission = require('../../../app/service/permission');
import ExportRegister = require('../../../app/service/register');
import ExportRole = require('../../../app/service/role');
import ExportStudent = require('../../../app/service/student');
import ExportUser = require('../../../app/service/user');
import ExportUserInfo = require('../../../app/service/userInfo');

declare module 'egg' {
  interface IService {
    course: AutoInstanceType<typeof ExportCourse>;
    dept: AutoInstanceType<typeof ExportDept>;
    dict: AutoInstanceType<typeof ExportDict>;
    login: AutoInstanceType<typeof ExportLogin>;
    permission: AutoInstanceType<typeof ExportPermission>;
    register: AutoInstanceType<typeof ExportRegister>;
    role: AutoInstanceType<typeof ExportRole>;
    student: AutoInstanceType<typeof ExportStudent>;
    user: AutoInstanceType<typeof ExportUser>;
    userInfo: AutoInstanceType<typeof ExportUserInfo>;
  }
}

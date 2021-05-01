// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportLogin = require('../../../app/service/login');
import ExportRegister = require('../../../app/service/register');
import ExportUser = require('../../../app/service/user');
import ExportUserInfo = require('../../../app/service/userInfo');

declare module 'egg' {
  interface IService {
    login: AutoInstanceType<typeof ExportLogin>;
    register: AutoInstanceType<typeof ExportRegister>;
    user: AutoInstanceType<typeof ExportUser>;
    userInfo: AutoInstanceType<typeof ExportUserInfo>;
  }
}

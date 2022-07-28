// This file is created by egg-ts-helper@1.30.4
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportUsersUser = require('../../../app/validate/users/user');

declare module 'egg' {
  interface Application {
    validate: T_custom_validate;
  }

  interface T_custom_validate {
    users: {
      user: AutoInstanceType<typeof ExportUsersUser>;
    }
  }
}

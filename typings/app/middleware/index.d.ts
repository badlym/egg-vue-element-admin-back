// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportErrorHandler = require('../../../app/middleware/error_handler');
import ExportMyJwt = require('../../../app/middleware/my_jwt');
import ExportNotfoundHandler = require('../../../app/middleware/notfound_handler');

declare module 'egg' {
  interface IMiddleware {
    errorHandler: typeof ExportErrorHandler;
    myJwt: typeof ExportMyJwt;
    notfoundHandler: typeof ExportNotfoundHandler;
  }
}

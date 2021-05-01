'use strict';
module.exports = options => {
  return async function myJwt(ctx, next) {
    let token = '';
    if (
      ctx.request.header.authorization &&
        ctx.request.header.authorization.split(' ')[0] === 'Bearer'
    ) {
      token = ctx.headers.authorization.split(' ')[1];
    }
    let decode;
    if (token) {
      try {
        // 解码token
        decode = ctx.app.jwt.verify(token, options.secret);
        ctx.helper.tokenInfo = decode;
        await next();
      } catch (error) {
        ctx.status = 401;
        ctx.body = {
          code: 401,
          msg: error.message,
          data: {},
        };

      }
    } else {
      ctx.status = 401;
      ctx.body = {
        code: 401,
        msg: '没有token',
        data: {},
      };

    }
  };

};

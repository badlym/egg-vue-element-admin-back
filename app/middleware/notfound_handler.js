'use strict';
module.exports = () => {
  return async function notFoundHandler(ctx, next) {
    await next();
    if (ctx.status === 404 && !ctx.body) {
      if (ctx.acceptJSON) {
        ctx.body = { error: '啥也没有' };
      } else {
        ctx.body = '<h1>Page Not Found</h1>';
      }
    }
  };
};

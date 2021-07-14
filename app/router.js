'use strict';

/**
 * @param {Egg.Application} app - egg application
 */


module.exports = app => {
  const { router, controller } = app;
  router.get('/api/home', controller.home.index);
  router.post('/api/login', controller.login.index);
  router.post('/api/register', controller.register.index);
  router.get('/api/userInfo', controller.userInfo.index);
  router.post('/api/uploadFile', controller.upload.index);
  router.resources('user', '/api/user', controller.user);
  router.delete('/api/user', controller.user.removes);
};
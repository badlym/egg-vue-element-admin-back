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
  router.delete('/api/user/remove', controller.user.removes);
  router.resources('user', '/api/user', controller.user);
  router.get('/api/role/getrole', controller.role.getRole);
  router.delete('/api/role/remove', controller.role.removes);
  router.resources('role', '/api/role', controller.role);
  router.delete('/api/permission/remove', controller.permission.remove);
  router.resources('permission', '/api/permission', controller.permission);
  router.delete('/api/dept/remove', controller.dept.remove);
  router.resources('dept', '/api/dept', controller.dept);


};

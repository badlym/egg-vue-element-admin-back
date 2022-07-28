'use strict';

const Controller = require('egg').Controller;
// const DataScopeType = require('@app/common/constant/DataScopeType');
const DataScopeType = require('../common/constant/DataScopeType');
class UserInfoController extends Controller {
  async index() {
    const { ctx } = this;
    const roleResult = await ctx.service.userInfo.index();
    ctx.logger.info(roleResult, '请求用户信息接口');
    const res = ctx.helper.jsonToObj(roleResult);
    res.roles = [];
    res.roles.push(res.role.name);
    res.introduction = res.role.description;
    res.permissions = res.role.permissions;
    const data_scope = res.role.data_scope;
    let dataScopeList = [];
    // eslint-disable-next-line default-case
    switch (data_scope) {
      case DataScopeType.all:
        dataScopeList = await ctx.service.userInfo.getAllDeptIdList();
        dataScopeList = dataScopeList.map(item => {
          return item.id;
        });
        break;
      case DataScopeType.customize:
        dataScopeList = res.role.depts.map(item => {
          return item.id;
        });
        break;
      case DataScopeType.deptAndBelow:
        // eslint-disable-next-line no-case-declarations
        const tree = await ctx.service.user.getNeedsTree(res.deptId);
        // eslint-disable-next-line no-case-declarations
        const copyData = ctx.helper.deepClone(tree);
        // eslint-disable-next-line no-case-declarations
        const treeRes = ctx.helper.jsonToArray(copyData);
        dataScopeList = treeRes.map(item => {
          return item.id;
        });
        break;
      case DataScopeType.dept:
        dataScopeList.push(res.deptId);
        break;
      case DataScopeType.self:
        dataScopeList = [];
        break;
    }
    res.dataScope = res.role.data_scope;
    res.dataScopes = dataScopeList;
    // roleResult.roles = [];
    // roleResult.roles.push(roleResult.role.name);
    // roleResult.introduction = roleResult.role.description;
    ctx.body = {
      code: 0,
      message: '请求用户信息接口成功',
      data: res,
    };
  }
}
module.exports = UserInfoController;

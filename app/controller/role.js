'use strict';

const Controller = require('egg').Controller;
class RoleController extends Controller {
  async index() {
    const { ctx } = this;
    // eslint-disable-next-line no-debugger
    const res = await ctx.service.role.index();
    ctx.status = 200;
    ctx.body = {
      data: {
        list: res.rows,
        total: res.count,
      },
    };
  }
  async getRole() {
    const { ctx } = this;
    const res = await ctx.service.role.getRole();
    console.log(res);
    ctx.status = 200;
    ctx.helper.success({ ctx, res });
  }
  async create() {
    const { ctx } = this;
    const data = ctx.request.body;
    const res = await this.ctx.service.role.create(data);
    ctx.body = {
      code: 0,
      msg: '新增成功',
      data: res,
    };
  }
  // 修改用户
  async update() {
    const { ctx, service } = this;
    // 校验参数
    // ctx.validate(this.UserUpdateTransfer)
    // 组装参数
    const { id } = ctx.params;
    console.log(id);
    const payload = ctx.request.body;
    // 调用 Service 进行业务处理
    const res = await service.role.update(id, payload);
    ctx.status = 201;
    ctx.helper.success({ ctx, res });
    // 设置响应内容和响应状态码
  }
  async updateByDept() {
    const { ctx, service } = this;
    const payload = ctx.request.body;
    const id = payload.id;
    // 调用 Service 进行业务处理
    const res = await service.role.updateByDept(id, payload);
    ctx.status = 201;
    ctx.helper.success({ ctx, res });
    // 设置响应内容和响应状态码
  }
  // 获取单个用户
  async show() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用 Service 进行业务处理
    let res = await service.role.show(id);
    res = JSON.parse(JSON.stringify(res));
    res.permIds = [];
    res.deptIds = res.depts.map(item => {
      return item.id;
    });
    delete res.depts;
    res.permIds = res.permissions.map(item => {
      return item.id;
    });
    delete res.permissions;
    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx, res, msg: '查询成功' });
  }
  // 删除单个用户
  async destroy() {
    const { ctx, service } = this;
    // 校验参数
    const { id } = ctx.params;
    // 调用 Service 进行业务处理
    const res = await service.role.destroy(id);
    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx, res, msg: '删除成功' });
  }
  // 删除所选用户(条件id[])
  async removes() {
    const { ctx, service } = this;
    const { ids } = ctx.request.body;
    const payload = ids.split(',') || [];
    // const payload = JSON.parse(id) || [];
    console.log(payload);
    //  调用 Service 进行业务处理
    const result = await service.role.removes(payload);
    ctx.helper.success({ ctx, res: result });
  }
}
module.exports = RoleController;

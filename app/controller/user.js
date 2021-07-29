'use strict';

const Controller = require('egg').Controller;


/**
 * @controller UserController（ 注释必写，swagger-doc是根据这段注释来生成接口的 ）。
 */
class UserController extends Controller {
  /**  （ 注释必写，swagger-doc是根据这段注释来生成接口详细信息的 ）。
   * @summary 根据ID查询信息。
   * @description 根据ID查询信息。
   * @router get /version01/controllers/selectById （ get 表示设置请求为 get 请求，最后的 selectById 对应下面的 selectById 方法 ）。
   * @request query integer Id 需要去查新的ID。（ get 对应 query 请求，请求值设定为 integer 纯数字类型，ID 为请求的字段，注意大小写，和下面的方法要一一对应，不然会报错 ）。
   * @response 200 JsonBody 返回结果。（ 对应 contract 里面的验证属性，下面会提到 。）
   */
  async index() {
    const { ctx } = this;
    // eslint-disable-next-line no-debugger
    const res = await ctx.service.user.index();
    ctx.status = 200;
    ctx.body = {
      data: {
        list: res.rows,
        total: res.count,
      },
    };
  }

  async create() {
    const { ctx } = this;
    const valid = await ctx.validate('users.user', ctx.request.body);
    if (!valid) return;
    const res = await this.ctx.service.user.create();
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
    const res = await service.user.update(id, payload);
    if (res[0] === 0) {
      ctx.status = 400;
      ctx.helper.resError({ ctx, res: null, msg: '暂未查询到数据' });
    } else {
      ctx.status = 201;
      ctx.helper.success({ ctx, res });
    }// 设置响应内容和响应状态码
  }

  // 获取单个用户
  async show() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用 Service 进行业务处理
    const res = await service.user.show(id);

    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx, res, msg: '查询成功' });
  }

  // 删除单个用户
  async destroy() {
    const { ctx, service } = this;
    // 校验参数
    const { id } = ctx.params;
    // 调用 Service 进行业务处理
    const res = await service.user.destroy(id);
    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx, res, msg: '删除成功' });
  }

  // 删除所选用户(条件id[])
  async removes() {
    const { ctx, service } = this;
    const { ids } = ctx.request.body;
    const payload = ids.split(',') || [];
    // const payload = JSON.parse(id) || [];
    console.log(payload, '载荷');
    //  调用 Service 进行业务处理
    const result = await service.user.removes(payload);
    ctx.helper.success({ ctx, res: result });
  }
}

module.exports = UserController;

// app/service/user.js
'use strict';
const Service = require('egg').Service;

class DeptService extends Service {
  async index() {
    const { ctx } = this;
    return await ctx.model.Dept.findAll({
      raw: true,
    });
  }
  async create() {
    const { ctx } = this;
    const data = ctx.request.body;

    // console.log(ctx.helper.tokenInfo, '创建者');
    // ctx.logger.debug(ctx.helper.tokenInfo.username);
    return ctx.model.Dept.create(data);

  }
  async update(id, payload) {
    const { ctx } = this;
    console.log(payload);
    return await ctx.model.Dept.update(payload, {
      where: { id },
    });
  }
  async show(id) {
    const { ctx } = this;
    return await ctx.model.Dept.findOne({ where: { id } });
  }
  async destroy(id) {
    const { ctx } = this;
    return ctx.model.Dept.destroy({ where: { id } }, { force: false });

  }
  async remove(payload) {

    const {
      ctx, app,
    } = this;
    // app.Sequelize
    const Op = app.Sequelize.Op;
    return ctx.model.Dept.destroy({ where: { id: { [Op.in]: payload } } });
  }
}

module.exports = DeptService;

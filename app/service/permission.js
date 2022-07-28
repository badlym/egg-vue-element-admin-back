// app/service/user.js
'use strict';
const Service = require('egg').Service;

class PermissionService extends Service {
  async index() {
    const { ctx } = this;
    return await ctx.model.Permission.findAll({
      raw: true,
      order: [[ 'sorts', 'ASC' ]],
    });
  }
  async create() {
    const { ctx } = this;
    const data = ctx.request.body;
    // console.log(ctx.helper.tokenInfo, '创建者');
    // ctx.logger.debug(ctx.helper.tokenInfo.username);
    return ctx.model.Permission.create(data);

  }
  async update(id, payload) {
    const { ctx } = this;
    console.log(payload);
    return await ctx.model.Permission.update(payload, {
      where: { id },
    });
  }
  async show(id) {
    const { ctx } = this;
    return await ctx.model.Permission.findOne({ where: { id } });
  }
  async destroy(id) {
    const { ctx } = this;
    return ctx.model.Permission.destroy({ where: { id } }, { force: false });

  }
  async remove(payload) {

    const {
      ctx, app,
    } = this;
    // app.Sequelize
    const Op = app.Sequelize.Op;
    return ctx.model.Permission.destroy({ where: { id: { [Op.in]: payload } } });
  }
}

module.exports = PermissionService;

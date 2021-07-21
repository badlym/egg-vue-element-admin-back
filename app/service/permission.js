// app/service/user.js
'use strict';
const Service = require('egg').Service;

class PermissionService extends Service {
  async index() {
    const { ctx } = this;
    const { current, limit } = ctx.query;
    return await ctx.model.Permission.findAndCountAll({
      limit: parseInt(limit),
      raw: true,
      offset: (current - 1) * limit,
    });
  }
  async getRole() {
    const { ctx } = this;
    return await ctx.model.Roles.findAll(
      {
        attributes: [ 'id', 'name', 'description' ],
      }
    );
  }
  async create() {
    const { ctx } = this;
    const data = ctx.request.body;
    console.log(data);
    data.createBy = ctx.helper.tokenInfo.data.username;
    // console.log(ctx.helper.tokenInfo, '创建者');
    // ctx.logger.debug(ctx.helper.tokenInfo.username);
    const user = await ctx.model.Users.create(data);
    return user;
  }
  async update(id, payload) {
    const { ctx } = this;
    console.log(payload);
    return await ctx.model.Users.update(payload, {
      where: { id },
    });
  }
  async show(id) {
    const { ctx } = this;
    return await ctx.model.Users.findOne({ where: { id } });
  }
  async destroy(id) {
    const { ctx } = this;
    return ctx.model.Users.destroy({ where: { id } }, { force: false });

  }
  async removes(payload) {
    const {
      ctx, app,
    } = this;
    // app.Sequelize
    const Op = app.Sequelize.Op;
    return ctx.model.Users.destroy({ where: { id: { [Op.in]: payload } } });

  }
}

module.exports = PermissionService;

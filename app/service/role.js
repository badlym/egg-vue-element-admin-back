// app/service/user.js
'use strict';
const Service = require('egg').Service;

class RoleService extends Service {
  async index() {
    const { ctx } = this;
    const { current, limit, name } = ctx.query;
    const whereObj = {};
    if (name) {
      whereObj.name = name;
    }
    return await ctx.model.Role.findAndCountAll({
      where: whereObj,
      limit: parseInt(limit),
      offset: (current - 1) * limit,
      // order: [[ 'id', 'ASC' ]],
      // include: {
      //   model: ctx.model.Roles,
      // },
    });
  }
  async getRole() {
    const { ctx } = this;
    return await ctx.model.Role.findAll(
      {
        attributes: [ 'id', 'name', 'description' ],
      }
    );
  }
  async create(data) {
    const { ctx } = this;
    return ctx.model.Role.create(data);
  }
  async update(id, payload) {
    const { ctx } = this;
    console.log(payload);
    return await ctx.model.Role.update(payload, {
      where: { id },
    });
  }
  async show(id) {
    const { ctx } = this;
    return await ctx.model.Role.findOne({ where: { id } });
  }
  async destroy(id) {
    const { ctx } = this;
    return ctx.model.Role.destroy({ where: { id } }, { force: false });

  }
  async removes(payload) {
    const {
      ctx, app,
    } = this;
    // app.Sequelize
    const Op = app.Sequelize.Op;
    return ctx.model.Role.destroy({ where: { id: { [Op.in]: payload } } });

  }
}

module.exports = RoleService;

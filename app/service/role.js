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
      raw: false,
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
    const permissions = await ctx.model.Permission.findAll({ where: { id: payload.permIds } });
    const role = await ctx.model.Role.findByPk(id);
    await role.update(payload);
    await role.setPermissions(permissions);
    return permissions;
  }
  async updateByDept(id, payload) {
    const { ctx } = this;
    console.log(payload);
    const depts = await ctx.model.Dept.findAll({ where: { id: payload.deptIds } });
    const role = await ctx.model.Role.findByPk(id);
    await role.update(payload);
    await role.setDepts(depts);
    return depts;
  }
  async show(id) {
    const { ctx } = this;
    return await ctx.model.Role.findOne({ where: { id },
      raw: false,
      include: [{
        model: ctx.model.Permission,
        attributes: [ 'id' ],
        through: {
          attributes: [],
        },
      },
      {
        model: ctx.model.Dept,
        attributes: [ 'id' ],
        through: {
          attributes: [],
        },
      },

      ],
    });
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

// app/service/user.js
'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async index() {
    const { ctx } = this;
    const { current, limit, username } = ctx.query;
    const whereObj = {};
    if (username) {
      whereObj.username = username;
    }
    return await ctx.model.Users.findAndCountAll({
      where: whereObj,
      limit: parseInt(limit),
      offset: (current - 1) * limit,
      order: [[ 'id', 'ASC' ]],
      include: {
        model: ctx.model.Roles,
      },
    });
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

module.exports = UserService;

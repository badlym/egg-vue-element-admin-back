// app/service/dict.js
'use strict';
const Service = require('egg').Service;
class DictService extends Service {
  async index() {
    const { ctx, app } = this;
    const Op = app.Sequelize.Op;
    const { current, limit, keywords } = ctx.query;
    let where;
    if (keywords) {
      where = {
        [Op.or]: [
          { data_type: keywords },
          { data_key: keywords },
          { data_value: keywords },
        ],
      };
    }
    return await ctx.model.Dict.findAndCountAll({
      where,
      limit: parseInt(limit),
      offset: (current - 1) * limit,
      order: [[ 'id', 'ASC' ]],
    });
  }
  async getDict(payload) {

    const { ctx } = this;
    return await ctx.model.Dict.findAll({
      where: {

        data_type: payload,
      },

    });


  }
  async create() {
    const { ctx } = this;
    const data = ctx.request.body;
    console.log(data);
    const dict = await ctx.model.Dict.create(data);
    return dict;
  }
  async update(id, payload) {
    const { ctx } = this;
    console.log(payload);
    return await ctx.model.Dict.update(payload, {
      where: { id },
    });
  }
  async show(id) {
    const { ctx } = this;
    return await ctx.model.Dict.findOne({ where: { id } });
  }
  async destroy(id) {
    const { ctx } = this;
    return ctx.model.Dict.destroy({ where: { id } }, { force: false });

  }
  async remove(payload) {
    const {
      ctx, app,
    } = this;
    // app.Sequelize
    const Op = app.Sequelize.Op;
    return ctx.model.Dict.destroy({ where: { id: { [Op.in]: payload } } });
  }
}

module.exports = DictService;

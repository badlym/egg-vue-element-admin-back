// app/service/user.js
'use strict';
const Service = require('egg').Service;

class CourseService extends Service {


  async index() {
    const { ctx } = this;
    const { current, limit, name } = ctx.query;
    const whereObj = {};
    if (name) {
      whereObj.name = name;
    }
    return await ctx.model.Course.findAndCountAll({
      where: whereObj,
      limit: parseInt(limit),
      offset: (current - 1) * limit,
      raw: false,
      // order: [[ 'id', 'ASC' ]],
      include: {
        model: ctx.model.Student,
      },
    });
  }
  async getCourse() {
    const { ctx } = this;
    return await ctx.model.Course.findAll(
      {
        attributes: [ 'id', 'name', 'description' ],
        include: [
          {
            model: ctx.model.Teacher,
          },
        ],
      }
    );
  }
  async create(data) {
    const { ctx } = this;
    return ctx.model.Course.create(data);
  }
  async update(id, payload) {
    const { ctx } = this;
    console.log(payload);
    const course = await ctx.model.Course.findByPk(id);
    return await course.update(payload);
  }
  async updateByDept(id, payload) {
    const { ctx } = this;
    console.log(payload);
    const depts = await ctx.model.Dept.findAll({ where: { id: payload.deptIds } });
    const course = await ctx.model.Course.findByPk(id);
    await course.update(payload);
    await course.setDepts(depts);
    return depts;
  }
  async show(id) {
    const { ctx } = this;
    return await ctx.model.Course.findOne({ where: { id },
      raw: false,
    });
  }
  async destroy(id) {
    const { ctx } = this;
    return ctx.model.Course.destroy({ where: { id } }, { force: false });
  }
  async remove(payload) {
    const {
      ctx, app,
    } = this;
    // app.Sequelize
    const Op = app.Sequelize.Op;
    return ctx.model.Course.destroy({ where: { id: { [Op.in]: payload } } });

  }
}

module.exports = CourseService;

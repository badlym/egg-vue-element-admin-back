'use strict';
// app/service/student.js

const Service = require('egg').Service;

class StudentService extends Service {
  async index() {
    const { ctx } = this;
    // const Op = app.Sequelize.Op;
    const { current, limit, studentname } = ctx.query;
    const whereObj = {};
    if (studentname) {
      whereObj.studentname = studentname;
    }
    return await ctx.model.Student.findAndCountAll({
      where: whereObj,
      limit: parseInt(limit),
      offset: (current - 1) * limit,
      order: [[ 'createdAt', 'ASC' ]],
    });
  }
  // 创建学生

  async create() {
    const { ctx } = this;
    const data = ctx.request.body;
    console.log(data);
    data.createBy = ctx.helper.tokenInfo.data.studentname;
    const student = await ctx.model.Student.create(data);
    return student;
  }
  async update(id, payload) {
    const { ctx } = this;
    console.log(payload);
    return await ctx.model.Student.update(payload, {
      where: { id },
    });
  }
  async show(id) {
    const { ctx } = this;
    return await ctx.model.Student.findOne({ where: { id } });
  }
  async destroy(id) {
    const { ctx } = this;
    return ctx.model.Student.destroy({ where: { id } }, { force: false });
  }
  async removes(payload) {
    const {
      ctx, app,
    } = this;
    // app.Sequelize
    const Op = app.Sequelize.Op;
    return ctx.model.Student.destroy({ where: { id: { [Op.in]: payload } } });
  }
}

module.exports = StudentService;

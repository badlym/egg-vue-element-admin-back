// app/service/user.js

'use strict';

const Service = require('egg').Service;

class UserInfoService extends Service {
  async index() {
    const { ctx } = this;


    return await ctx.model.User.findOne({
      where: {
        id: ctx.helper.tokenInfo.data.id,
      },
      raw: false,
      include:
            [{
              model: ctx.model.Role,
              include: [
                {
                  model: ctx.model.Permission,
                  through: {
                    attributes: [],
                  },
                },
                {
                  model: ctx.model.Dept,
                  through: {
                    attributes: [],
                  },
                },

              ],
            },
            ],

    });

  }

  async getAllDeptIdList() {
    const { ctx } = this;
    return await ctx.model.Dept.findAll({
      attributes: [ 'id' ],
    });
  }


}


module.exports = UserInfoService;

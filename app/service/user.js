// app/service/user.js
'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async index() {
    const { ctx, app } = this;
    const Op = app.Sequelize.Op;
    let { current, limit, username, deptId, roleId } = ctx.query;
    const whereObj = {};
    if (username) {
      whereObj.username = username;
    }
    const roleWhere = {};
    if (roleId) {
      roleWhere.id = roleId;
    }
    // return tree;
    /*
    *
    * var copydata = deepCopy(jsonarr)
var bb = jsonToArray(copydata)
console.log('json转数组',bb)
var aa = arrayToJson(data)
console.log('数组转树形结构',aa)
    * */
    const tree = await this.getNeedsTree(deptId);
    console.log(JSON.parse(JSON.stringify(tree)));
    const copyData = ctx.helper.deepClone(tree);
    let treeRes = ctx.helper.jsonToArray(copyData);
    treeRes = treeRes.map(item => {
      return item.id;
    });
    deptId = parseInt(deptId);
    if (deptId !== 0) {
      return await ctx.model.User.findAndCountAll({
        where: whereObj,
        limit: parseInt(limit),
        offset: (current - 1) * limit,
        order: [[ 'createdAt', 'ASC' ]],
        include: [
          {
            model: ctx.model.Role,
          },
          {
            where: { id: { [Op.in]: treeRes } },
            model: ctx.model.Dept,
          },
        ],
      });
    }
    return await ctx.model.User.findAndCountAll({
      where: whereObj,
      limit: parseInt(limit),
      offset: (current - 1) * limit,
      order: [[ 'createdAt', 'ASC' ]],
      include: [
        {
          model: ctx.model.Role,
          where: roleWhere,
        },
        {
          model: ctx.model.Dept,
        },
      ],
    });
  }
  async getNeedsTree(id) {
    const { ctx } = this;
    let rootNeeds = await ctx.model.Dept.findAll({
      where: {
        id,
      },
    });
    rootNeeds = JSON.parse(JSON.stringify(rootNeeds));
    rootNeeds = await this.getChildNeeds(rootNeeds);
    return rootNeeds;
  }
  async getChildNeeds(rootNeeds) {
    const { ctx } = this;
    const expendPromise = [];
    rootNeeds.forEach(item => {
      expendPromise.push(ctx.model.Dept.findAll({
        where: {
          parentId: item.id,
        },
      }));
    });
    let child = await Promise.all(expendPromise);
    child = ctx.helper.jsonToObj(child);

    for (let [ idx, item ] of child.entries()) {
      if (item.length > 0) {
        item = await this.getChildNeeds(item);
      }
      rootNeeds[idx].children = item;
    }
    return rootNeeds;
  }
  async create() {
    const { ctx } = this;
    const data = ctx.request.body;
    console.log(data);
    data.createBy = ctx.helper.tokenInfo.data.username;
    // console.log(ctx.helper.tokenInfo, '创建者');
    // ctx.logger.debug(ctx.helper.tokenInfo.username);
    const user = await ctx.model.User.create(data);
    return user;
  }
  async update(id, payload) {
    const { ctx } = this;
    console.log(payload);
    return await ctx.model.User.update(payload, {
      where: { id },
    });
  }
  async show(id) {
    const { ctx } = this;
    return await ctx.model.User.findOne({ where: { id } });
  }
  async destroy(id) {
    const { ctx } = this;
    return ctx.model.User.destroy({ where: { id } }, { force: false });

  }
  async removes(payload) {
    const {
      ctx, app,
    } = this;
    // app.Sequelize
    const Op = app.Sequelize.Op;
    return ctx.model.User.destroy({ where: { id: { [Op.in]: payload } } });
  }
  async getUserCourse(payload) {
    const { ctx } = this;
    // const Op = app.Sequelize.Op;
    const { current, limit } = payload;
    return await ctx.model.User.findAndCountAll({
      where: {
        id: ctx.helper.tokenInfo.data.id,
        roleId: ctx.helper.tokenInfo.data.roleId,
      },
      limit: parseInt(limit),
      offset: (current - 1) * limit,
      order: [[ 'createdAt', 'ASC' ]],
      include: [
        {
          model: ctx.model.Course,
          include: {
            through: {
              attributes: [],
            },
            model: ctx.model.User,
            where: {
              roleId: 2,
            },
          },
        },
      ],
    });

  }
}

module.exports = UserService;

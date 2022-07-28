'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const Role = app.model.define('role', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: {
      type: STRING(255),
      allowNull: true,
      unique: true,
    },
    description: STRING,
    data_scope: {
      type: STRING(11),
      allowNull: true,
      references: {
        model: 'dict',
        key: 'data_key',
      },
    },
  }, {
    timestamps: false,
  });
  Role.associate = function() {
    app.model.Role.belongsTo(app.model.Dict, {
      foreignKey: 'data_scope',
    });
    app.model.Role.hasMany(app.model.User);
    app.model.Role.belongsToMany(app.model.Permission, {
      through: app.model.RolePermission,
      foreignKey: 'roleId', // 注意写法
      otherKey: 'permId',
    });
    app.model.Role.belongsToMany(app.model.Dept, {
      through: app.model.RoleDept,
      foreignKey: 'roleId', // 注意写法
      otherKey: 'deptId',
    });
  };
  return Role;
};

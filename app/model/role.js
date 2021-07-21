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
  }, {
    timestamps: false,
  });
  Role.associate = function() {
    app.model.Role.hasMany(app.model.User);
    app.model.Role.belongsToMany(app.model.Permission, {
      through: app.model.RolePermission,
      foreignKey: 'roleId', // 注意写法
      otherKey: 'permId',
    });
  };
  return Role;
};

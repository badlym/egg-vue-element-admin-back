/* indent size: 2 */
'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const Model = app.model.define('permission', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true,
    },
    parentId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    path: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    component: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    redirect: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    noKeepAlive: {
      type: DataTypes.INTEGER(255),
      allowNull: true,
    },
    noClosable: {
      type: DataTypes.INTEGER(255),
      allowNull: true,
    },
    alwaysShow: {
      type: DataTypes.INTEGER(255),
      allowNull: true,
    },
    hidden: {
      type: DataTypes.INTEGER(255),
      allowNull: true,
    },
    icon: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  }, {
    tableName: 'permission',
    timestamps: false,
  });

  Model.associate = function() {
    app.model.Permission.belongsToMany(app.model.Role, {
      through: app.model.RolePermission,
      foreignKey: 'permId', // 注意写法
      otherKey: 'roleId',
    });
  };

  return Model;
};

/* indent size: 2 */
'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const Model = app.model.define('permission', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    parentId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    types: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    i_frame: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    levels: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    state: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    sorts: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    component_name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    component_path: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    icon: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    cache: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    hidden: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    permissionFlag: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    tableName: 'permission',
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

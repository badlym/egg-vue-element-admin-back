/* indent size: 2 */
'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const Model = app.model.define('dept', {
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
    levels: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    for_service: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    deleted: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    sorts: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
  }, {
    tableName: 'dept',
  });
  Model.associate = function() {
  };
  return Model;
};

/* indent size: 2 */
'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('dict', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      // autoIncrement: true,
    },
    data_type: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    data_key: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    data_value: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    sorts: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    tableName: 'dict',
  });

  Model.associate = function() {
    app.model.Dict.hasOne(app.model.Role, {
      foreignKey: 'data_scope',
    });
  };
  return Model;
};

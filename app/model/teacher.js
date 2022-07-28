/* indent size: 2 */
'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('teacher', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
    },
    sex: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    number: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      unique: true,
    },
    dept_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  }, {
    tableName: 'teacher',
  });

  Model.associate = function() {

  };

  return Model;
};

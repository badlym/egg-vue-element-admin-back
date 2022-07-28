/* indent size: 2 */
'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('role_dept', {
    role_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'role',
        key: 'id',
      },
    },
    dept_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'dict',
        key: 'id',
      },
    },
  }, {
    tableName: 'role_dept',
  });

  Model.associate = function() {

  };

  return Model;
};

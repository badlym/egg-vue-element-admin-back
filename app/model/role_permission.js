/* indent size: 2 */
'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('role_permission', {
    role_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'role',
        key: 'id',
      },
    },
    perm_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'permission',
        key: 'id',
      },
    },
  }, {
    tableName: 'role_permission',
  });

  Model.associate = function() {

  };
  return Model;
};

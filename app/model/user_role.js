/* indent size: 2 */
'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('user_role', {
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    role_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
  }, {
    tableName: 'user_role',
  });

  Model.associate = function() {

  };

  return Model;
};

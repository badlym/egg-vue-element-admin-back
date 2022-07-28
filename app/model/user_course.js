/* indent size: 2 */
'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const Model = app.model.define('user_course', {
    user_id: {
      type: DataTypes.CHAR(36),
      allowNull: true,
    },
    course_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
  }, {
    tableName: 'user_course',
  });

  Model.associate = function() {

  };

  return Model;
};

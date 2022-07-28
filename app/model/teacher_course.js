/* indent size: 2 */
'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('teacher_course', {
    teacher_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    course_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
  }, {
    tableName: 'teacher_course',
  });

  Model.associate = function() {

  };

  return Model;
};

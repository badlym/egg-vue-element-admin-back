/* indent size: 2 */
'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('student_course', {
    student_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    course_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    flag: {
      type: DataTypes.BOOLEAN,
      allowNull: true,


    },
  }, {
    tableName: 'student_course',
  });

  Model.associate = function() {


  };

  return Model;
};

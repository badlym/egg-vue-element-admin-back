/* indent size: 2 */
'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('course', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    number: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  }, {
    tableName: 'course',
  });

  Model.associate = function() {
    app.model.Course.belongsToMany(app.model.Student, {
      through: app.model.StudentCourse,
      foreignKey: 'courseId', // 注意写法
      otherKey: 'studentId',
    });
  };
  return Model;
};

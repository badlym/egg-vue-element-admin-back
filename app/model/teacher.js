/* indent size: 2 */
'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('teacher', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    sex: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    number: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    avatar: {
      type: DataTypes.STRING(255),
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
    app.model.Teacher.belongsToMany(app.model.Course, {
      through: app.model.TeacherCourse,
      foreignKey: 'teacherId', // 注意写法
      otherKey: 'courseId',
    });
  };
  return Model;
};

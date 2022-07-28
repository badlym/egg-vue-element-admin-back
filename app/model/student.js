/* indent size: 2 */
'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('student', {
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
    tableName: 'student',
  });
  Model.associate = function() {
    app.model.Student.belongsToMany(app.model.Course, {
      through: app.model.StudentCourse,
      foreignKey: 'studentId', // 注意写法
      otherKey: 'courseId',
    });
  };
  return Model;
};

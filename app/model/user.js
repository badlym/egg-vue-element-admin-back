'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const User = app.model.define('user', {
    id: { type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: STRING,
      unique: true,
      allowNull: false,
    },
    password: STRING,
    created_at: DATE,
    updated_at: DATE,
    deleted_at: DATE,
    createBy: STRING,
    updateBy: STRING,
    roleId: {
      type: INTEGER,
      references: {
        model: {
          tableName: 'roles',
        },
        key: 'id',
      },
    },
    deptId: {
      type: INTEGER,
      references: {
        model: {
          tableName: 'dept',
        },
        key: 'id',
      },
    },
    name: STRING,
    avatar: STRING,
    phone: STRING,

  }, {
    timestamps: true,
  });
  User.associate = function() {
    // 1对多
    app.model.User.belongsTo(app.model.Dept);
    app.model.User.belongsTo(app.model.Role);
    app.model.User.belongsToMany(app.model.Course, {
      through: app.model.UserCourse,
      foreignKey: 'userId', // 注意写法
      otherKey: 'courseId',
    });
  };
  return User;
};

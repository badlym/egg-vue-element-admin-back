'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, UUID } = app.Sequelize;
  const User = app.model.define('user', {
    id: { type: UUID, primaryKey: true, defaultValue: app.Sequelize.UUIDV4 },
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
    name: STRING,
    avatar: STRING,
    phone: STRING,
  }, {
    timestamps: true,
  });
  User.associate = function() {
    // 1对多
    app.model.User.belongsTo(app.model.Role);
  };
  return User;
};

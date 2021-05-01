'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, UUID } = app.Sequelize;
  const Users = app.model.define('users', {
    id: { type: UUID, primaryKey: true, defaultValue: app.Sequelize.UUIDV4 },
    username: {
      type: STRING,
      unique: true,
      allowNull: false,
    },
    password: STRING,
    created_at: DATE,
    updated_at: DATE,
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
    timestamps: false,
  });
  Users.associate = function() {
    // 1对多
    app.model.Users.belongsTo(app.model.Roles);
  };
  return Users;


};

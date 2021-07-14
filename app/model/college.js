'use strict';

module.exports = app => {
  const { STRING, DATE, UUID } = app.Sequelize;
  const College = app.model.define('users', {
    id: { type: UUID, primaryKey: true, defaultValue: app.Sequelize.UUIDV4, allowNull: false },
    name: {
      type: STRING,
      unique: true,
      allowNull: false,
    },
    created_at: DATE,
    updated_at: DATE,
    deleted_at: DATE,
    createBy: STRING,
    updateBy: STRING,
  }, {
    timestamps: false,
  });
  College.associate = function() {
    // 1对多
    app.model.College.hasMany(app.model.Class);
  };
  return College;
};

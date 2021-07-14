'use strict';

module.exports = app => {
  const { STRING, DATE, UUID } = app.Sequelize;
  const Class = app.model.define('users', {
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
  Class.associate = function() {
    // 1对多
    app.model.Class.belongsTo(app.model.College);
  };
  return Class;
};

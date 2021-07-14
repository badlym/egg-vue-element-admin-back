'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const Roles = app.model.define('roles', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING,
    description: STRING,
  }, {
    timestamps: false,
  });
  Roles.associate = function() {
    app.model.Roles.hasMany(app.model.Users);
  };
  return Roles;
};

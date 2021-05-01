'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Roles = app.model.define('roles', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING,
    description: STRING,
  }, {
    timestamps: false,
  });
  Roles.associate = function() {

    app.model.Roles.hasOne(app.model.Users);


  };
  return Roles;
};

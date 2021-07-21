/* indent size: 2 */
'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const Model = app.model.define('colleges', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    deleted_at: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    create_by: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    uptdate_by: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  }, {
    tableName: 'colleges',
  });
  Model.associate = function() {
    app.model.College.hasMany(app.model.Class);
  };

  return Model;
};

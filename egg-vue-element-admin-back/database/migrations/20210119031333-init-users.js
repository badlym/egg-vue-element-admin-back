'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, UUID } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
      username: {
        type: STRING,
        unique: true,
        allowNull: false,
      },
      created_at: DATE,
      updated_at: DATE,
      deleted_at: DATE,
      password: STRING,
      create_by: STRING,
      update_by: STRING,
      role_id: {
        type: INTEGER,
        // references: {
        //   model: {
        //     tableName: 'roles',
        //   },
        //   key: 'id',
        // },
        allowNull: false,
      },
      name: STRING,
      avatar: STRING,
      phone: STRING,
    }, {
      timestamps: true,
    });

  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};

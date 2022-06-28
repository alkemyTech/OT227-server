'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Members', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      facebookUrl: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      instagramUrl: {
        type: Sequelize.STRING(1234),
        allowNull: true,
      },
      linkedinUrl: {
        type: Sequelize.STRING(1234),
        allowNull: true,
      },
      image: {
        type: Sequelize.STRING(1234),
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Members');
  }
};


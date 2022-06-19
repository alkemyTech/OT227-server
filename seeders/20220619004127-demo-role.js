'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Roles', [{
      name: 'Demo-Role',
      description: 'Some description',
      createdAt: new Date,
      updatedAt: new Date
    }]);
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Roles', null, {});

  }
};

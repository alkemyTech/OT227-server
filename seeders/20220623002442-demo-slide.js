'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Slides', [{
      organizationId: 1,
      text: 'Demo-text',
      imageUrl: 'https://www.a_random_url.com',
      order: 1,
      createdAt: new Date,
      updatedAt: new Date
    }]);
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Slides', null, {});

  }
};

'use strict';
const Random = require('../helpers/createRandomUser');

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Users', Random.generateUsers(), {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {}); 
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Demo user firstName',
      lastName: 'Demo user lastName',
      email: 'demoEmail@demo.com',
      //Password not encrypted
      password: 'Some_password1234',
      roleId: 1,
      photo: 'https://www.a_random_url.com',
      createdAt: new Date,
      updatedAt: new Date
    }]);
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Users', null, {});

  }
};

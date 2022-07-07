'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Demo user firstName',
      lastName: 'Demo user lastName',
      email: 'demoEmail@demo.com',
      //Password here is: password123, encrypted here https://bcrypt-generator.com/ with 10 salt rounds
      password: '$2a$10$RnLMOugaYvgEKYk/GZ5BZe1Y82GrmMM.DcW./MHLKP8aS4xin/SA6',
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

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Contacts',
      [
        {
          name: 'John Doe',
          phone: '+1-555-555-5555',
          email: 'demoEmail@mail.com',
          message: 'This is a demo message',
          createdAt: new Date(),
          updatedAt: new Date(),

        },
      ],
      {}
    );
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Contacts", null, {});
  }
};

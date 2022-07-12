'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Testimonials', [{
      name: 'Example name Testimonials', 
      content: 'Example Content Testimonials', 
      image: 'testimonials.png',
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Testimonials', null, {});
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Organizations', [
      {
        name: 'Example name Organization', 
        image: 'https://www.funcion.info/wp-content/uploads/2019/04/funcion-de-la-ong.jpg',
        address: 'Perez castellano 2121',
        phone: 84746235,
        email: 'organization@organization.com',
        welcomeText: 'Welcome Text',
        aboutUsText: 'About us text',
        createdAt: new Date,
        updatedAt: new Date
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

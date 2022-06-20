'use strict';

module.exports = {
  //Se ejecuta cuando hacemos SEED
  up: async (queryInterface, Sequelize) => {

    let news = [{
      name: 'Example name News', 
      content: 'Example Content news', 
      image: 'http://mediashift.org/wp-content/uploads/2017/04/7415396442_5596046de8_k.jpg',
      categoryId: 1,
      createdAt: new Date,
      updatedAt: new Date
    }];
   
      await queryInterface.bulkInsert('News', news , {});
    
  },

  //Se ejecuta cuando se deshace SEED
  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('News', null, {});
     
  }
};

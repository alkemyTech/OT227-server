"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", [
      {
        name: "Novedades",
        description: "A description of the category",
        image: "https://picsum.photos/200/300",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Informacion",
        description: "A description of the category",
        image: "https://picsum.photos/200/300",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};

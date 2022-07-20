"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // comment with userId 1 and newsId 1
    await queryInterface.bulkInsert("Comments", [
      {
        body: "This is a demo comment",
        userId: 1,
        newsId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Comments", null, {});
  },
};

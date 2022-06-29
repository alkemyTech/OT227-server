"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Members",
      [
        {
          name: "Juan",
          facebookUrl: "https://www.facebook.com/juan.perez",
          instagramUrl: "https://www.instagram.com/juan.perez",
          linkedinUrl: "https://www.linkedin.com/in/juan.perez",
          image:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elpais.com%2Finternacional%2F2020%2F01%2F10%2Fciencia%2F20200110%2F20200110-ciencia-juan-perez-el-nuevo-director-de-la-universidad-de-los-andes.html&psig=AOvVaw0X_X_X_X_X_X_X_X_X_X_X&ust=1580109898420903&source=instagram&cd=vfe&ved=2ahUKEwjNy7Hq_P_qAhXKzVkKHUzqC_EQ7BAgGECcQEoECAAQ",
          description: "Juan es una persona muy buena",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pedro",
          facebookUrl: "https://www.facebook.com/pedro.perez",
          instagramUrl: "https://www.instagram.com/pedro.perez",
          linkedinUrl: "https://www.linkedin.com/in/pedro.perez",
          image:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elpais.com%2Finternacional%2F2020%2F01%2F10%2Fciencia%2F20200110%2F20200110-ciencia-juan-perez-el-nuevo-director-de-la-universidad-de-los-andes.html&psig=AOvVaw0X_X_X_X_X_X_X_X_X_X_X&ust=1580109898420903&source=instagram&cd=vfe&ved=2ahUKEwjNy7Hq_P_qAhXKzVkKHUzqC_EQ7BAgGECcQEoECAAQ",
          description: "Pedro es una persona muy buena",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Members", null, {});
  },
};

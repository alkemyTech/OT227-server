'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('Activities', [
      {
       name: 'Programas educativos',
       content: 'Mediante nuestros programas educativos, buscamos incrementar la capacidad intelectual, moral y afectiva de las personas deacuerdo con la cultura y las normas de convivencia de la sociedad a la quepertenecen',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       name: "Apoyo escolar para el nivel primario",
       content: 'El espacio de apoyo escolar es el corazón del área educativa. Se realizan los talleres de lunes a jueves de 10 a 12 horas y de 14 a 16 horas en el contraturno, Los sábados también se realiza el taller para niños y niñas que asisten a la escuela doble turno.',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
      name: "Apoyo escolar nivel secundaria",
      content: 'Del mismo modo que en primaria, este taller es el corazón del área secundaria. Se realizan talleres de lunes a viernes de 10 a 12 horas y de 16 a 18 horas en el contraturno. ',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: "Tutorías",
      content: 'Es un programa destinado a jóvenes a partir del tercer año de secundaria,cuyo objetivo es garantizar su permanencia en la escuela y construir un proyecto de vida que da sentido al colegio.',
      createdAt: new Date(),
      updatedAt: new Date()
     }
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Activities', null, {});
  }
};

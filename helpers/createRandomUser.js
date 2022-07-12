const {faker} = require('@faker-js/faker');

class Random {
  static createRandomUser(role, number) {
    return {
     firstName: faker.name.firstName(),
     lastName: faker.name.lastName(),
     email:`user${number}@test.com`,
     //Password here is: password123, encrypted here https://bcrypt-generator.com/ with 10 salt rounds
     password: '$2a$10$RnLMOugaYvgEKYk/GZ5BZe1Y82GrmMM.DcW./MHLKP8aS4xin/SA6',
     roleId: role,
     photo: faker.image.imageUrl(),
     createdAt: new Date,
     updatedAt: new Date
    }
  }

  static generateUsers (){
    const users = [];
    let count = 1;

    Array.from({ length: 10 }).forEach(() => {
        users.push(this.createRandomUser(1, count++));
        users.push(this.createRandomUser(2, count++));
    });
    return users;
  }
}

module.exports = Random;
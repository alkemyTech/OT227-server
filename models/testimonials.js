'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Testimonials extends Model {
    static associate(models) {}
  }
  Testimonials.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Testimonials',
    paranoid: true
  });
  return Testimonials;
};
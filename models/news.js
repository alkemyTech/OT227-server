'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    
    static associate(models) {
      
      this.belongsTo(models.Category, {foreignKey: 'CategoryId'});
    }
  };
  News.init({
    name: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'News',
    paranoid: true
  });
  return News;
};
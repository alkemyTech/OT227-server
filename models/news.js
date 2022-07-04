'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    
    static associate(models) {
      
      this.belongsTo(models.Categories, {foreignKey: 'CategoryId'});
    }
  };
  News.init({
    name: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'News',
    paranoid: true
  });
  return News;
};
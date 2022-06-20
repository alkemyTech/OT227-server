//create a sequlize model to represent a category,with an ID not null auto incremental with softdeletes paranoid and timestamps
module.exports = function(sequelize, DataTypes) {
  const Category = sequelize.define('Category', {
      id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
      },
      name: {
      type: DataTypes.STRING,
      allowNull: false
      },
      description: {
      type: DataTypes.STRING,
      allowNull: false
      },
      image: {
      type: DataTypes.STRING,
      allowNull: false
      },
      deletedAt: {
      type: DataTypes.DATE,
      allowNull: true
      }
  }, {
      paranoid: true,
      timestamps: true,
      underscored: true,
      tableName: 'categories'
  });
  return Category;
  }
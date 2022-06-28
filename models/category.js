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
      allowNull: true 
      },
      image: {
      type: DataTypes.STRING(1234),
      allowNull: true
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
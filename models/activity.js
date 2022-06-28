module.exports = function (sequelize, DataTypes) {
  const Activity = sequelize.define(
    "Activity",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.VARCHAR,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      image: {
        type: Sequelize.VARCHAR,
        allowNull: false,
      },
    },
    {
      paranoid: true,
      timestamps: true,
      underscored: true,
      tableName: "activities",
    }
  );
  return Activity;
};

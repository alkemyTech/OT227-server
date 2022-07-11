module.exports = function (sequelize, DataTypes) {
  const Activity = sequelize.define('Activity', {
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
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    paranoid: true,
    timestamps: true,
  }
  );

  return Activity;
};

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
    description:
    {
      type: DataTypes.STRING
    }
  }, {
    paranoid: true,
    timestamps: true,
    underscored: true,
  }
  );

  return Activity;
};

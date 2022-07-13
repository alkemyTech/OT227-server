module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Member",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      facebookUrl: {
        type: DataTypes.STRING(1234),
        allowNull: true,
      },
      instagramUrl: {
        type: DataTypes.STRING(1234),
        allowNull: true,
      },
      linkedinUrl: {
        type: DataTypes.STRING(1234),
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING(1234),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      deletedAt: {
      type: DataTypes.DATE,
      allowNull: true
      }
    },
    {
      paranoid: true,
      timestamps: true,
      tableName: "members",
    }
  );
};

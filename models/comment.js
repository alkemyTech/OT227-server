const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
      
      /* the comment belongs to a post
      Comment.belongsTo(models.Post, {
        foreignKey: 'postId'
      });
      >>>Esto queda comentado porque entiendo que no existen los posts o serian las news?<<< No me reten por dejar comentarios en el PR jajaja
      */
    }
  }
  Comment.init(
    {
      body: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};

const { Comments } = require("../models");
const httpStatus = require("../helpers/httpStatus");


class CommentsController {
  static async createComment(req, res) {
    try {
      const { comment, newsId, userId } = req.body;
      const newComment = await Comments.create({
        comment,
        newsId,
        userId
      });
      res.status(httpStatus.OK).json({
        message: "Comment created successfully",
        data: newComment
      });
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: error.message
      });
    }
  }
}

module.exports = CommentsController;
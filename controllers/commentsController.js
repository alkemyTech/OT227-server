const { Comments } = require("../models");

class CommentsController {
  static async createComment(req, res) {
    try {
      const { comment, newsId, userId } = req.body;
      const newComment = await Comments.create({
        comment,
        newsId,
        userId
      });
      res.status(201).json({
        message: "Comment created successfully",
        data: newComment
      });
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  }
}

module.exports = CommentsController;
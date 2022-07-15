const { Comments } = require("../models");
const httpStatus = require("../helpers/httpStatus");


class CommentsController {
  static async getAllComments(req, res) {
    
    try {
      const comments = await Comments.findAll({
        attributes: ['body', 'createdAt'],
        order: [['createdAt', 'ASC']]
      });
      if (comments) {
        return await res.status(httpStatus.OK).json(comments);
      }
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: error.message,
      });
    }
    return res.status(httpStatus.NOT_FOUND).json({
      msg: "Comments not found",
    });
  }
}

module.exports = CommentsController;
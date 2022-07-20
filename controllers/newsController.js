const { News } = require("../models");
const httpStatus = require("../helpers/httpStatus");

class NewsController {
  static async deleteById(req, res) {
    const news = await News.findOne({ where: { id: req.params.id } });
    if (!news) {
      return res.status(httpStatus.NOT_FOUND).json({
        msg: "News not found",
      });
    }
    try {
      await News.destroy({where: {id:req.params.id}})
      return res
        .status(httpStatus.OK)
        .json({ message: "New deleted succesfully" });
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: error.message,
      });
    }
  }

  static async getById(req, res) {
    let news;
    try {
      news = await News.findOne({ where: { id: req.params.id } });
      if (news) {
        return await res.status(httpStatus.OK).json(news);
      }
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: error.message,
      });
    }
    return res.status(httpStatus.NOT_FOUND).json({
      msg: "News not found",
    });
  }
  //create new news´
  /*
 example json to recibe from client:

  {
    "name": "title",
    "description": "description",
    "image": "image",
    "content": "content",
    "categoryId": 1,
    "createdAt": "2020-06-22T12:55:38.000Z",
    "updatedAt": "2020-06-22T12:55:38.000Z"
  }

 */
  static async createNew(req, res) {
    try {
      const newNews = await News.create(req.body);
      return await res.status(httpStatus.OK).json(newNews);
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: error.message,
      });
    }
  }

  static async updateNewById(req,res){

    let news;

    const { id } = req.params;

    try{

      news = await News.findByPk(id);

    } catch(err) {

      return res.status(httpStatus.NOT_FOUND).json({ message: err.message });

    }

    try{

      await News.update(req.body, {where : id})

      return res.status(httpStatus.OK).json(news);

    } catch(err) {

      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });

    }

  }

}

module.exports = NewsController;

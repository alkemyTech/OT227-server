const { News } = require('../models');
const httpStatus = require('../helpers/httpStatus');

class NewsController {
  static async getById (req, res){
    try {
     const news = await News.findOne({ where: { id: req.params.id } });
     if(news){
      return res.status(httpStatus.OK).json(news);
     }
     return res.status(httpStatus.NOT_FOUND).json({
      msg: 'News not found'
     });
    } catch (error) {
     return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      msg: error.message
     })
    }
 }
}

module.exports = NewsController; 
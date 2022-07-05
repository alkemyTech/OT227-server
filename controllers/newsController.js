const { News } = require('../models');
const httpStatus = require('../helpers/httpStatus');

class NewsController {
  static async getById (req, res){
    let news;
    try {
     news = await News.findOne({ where: { id: req.params.id } });
     if(news){
      return await res.status(httpStatus.OK).json(news);
     }
    } catch (error) {
     return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      msg: error.message
     })
    }
    return res.status(httpStatus.NOT_FOUND).json({
        msg: 'News not found'
       });
 }
}

module.exports = NewsController; 
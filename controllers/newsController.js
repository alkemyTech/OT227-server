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

 static async deleteById (req, res){
  const news = await News.findOne({ where: { id: req.params.id } });
  if(!news){
    return res.status(httpStatus.NOT_FOUND).json({
      msg: 'News not found'
     });
  }
    
  try { 
     await news.destroy();
     return res.status(httpStatus.OK).json({ message: 'User deleted succesfully' });
  } catch (error) {
   return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    msg: error.message
   });
  }
}
}

module.exports = NewsController; 
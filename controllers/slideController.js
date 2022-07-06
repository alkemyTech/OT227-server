const { Slide } = require('../models');
const httpStatus = require('../helpers/httpStatus');

class SlideController {
  static async getAllSlides(req, res) {
    try {
      const slides = await Slide.findAll({
        attributes: ['imageUrl', 'order'],
      });
      return res.status(httpStatus.OK).json(slides);
    } catch (err) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err.message);
    }
  }

  static async getById(req,res){
    try {
      const slide = await Slide.findOne({ where: { id: req.params.id } });
      if (slide) {
        return await res.status(httpStatus.OK).json(slide);
      }
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: error.message,
      });
    }
    return res.status(httpStatus.NOT_FOUND).json({
      msg: "Slide not found",
    });
  }
}

module.exports = SlideController;
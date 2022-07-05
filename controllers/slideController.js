const { Slide } = require('../models/slide');

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
}

module.exports = SlideController;

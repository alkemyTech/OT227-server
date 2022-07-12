const { Slide } = require('../models');
const httpStatus = require('../helpers/httpStatus');

class SlideController {
  
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

  static async deleteById(req, res) {
    const slide = await Slide.findOne({ where: { id: req.params.id } });
    if (!slide) {
      return res.status(httpStatus.NOT_FOUND).json({
        msg: "Slide not found",
      });
    }
    try {
      await slide.destroy();
      return res
        .status(httpStatus.OK)
        .json({ message: "Slide deleted succesfully" });
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: error.message,
      });
    }
  }

  static async modifyById(req, res) {
    const slide = await Slide.findOne({ where: { id: req.params.id } });
    if (!slide) {
      return res.status(httpStatus.NOT_FOUND).json({
        msg: "Slide not found",
      });
    }
    try {
      await slide.update(req.body);
      return res
        .status(httpStatus.OK)
        .json({ message: "Slide updated succesfully" });
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: error.message,
      });
    }
  }
}

module.exports = SlideController;
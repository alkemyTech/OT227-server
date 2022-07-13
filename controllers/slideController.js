const { Slide } = require("../models");
const httpStatus = require("../helpers/httpStatus");

class SlideController {
  static async getById(req, res) {
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

  static async modifySlideById(req, res) {
    const { id } = req.params;
    const { organizationId, text, imageUrl, order } = req.body;
    if (!organizationId && !text && !imageUrl && !order) {
      return res.status(httpStatus.BAD_REQUEST).json({
        msg: "Not have fields to update",
      });
    }
    const bodyUpdate = {
      organizationId,
      text,
      imageUrl,
      order,
    };
    let updatedSlide;
    try {
      updatedSlide = await Slide.update(bodyUpdate, {
        where: { id },
      });
    } catch (error) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ msg: error.message });
    }
    if (updatedSlide[0]) {
      const slide = await Slide.findOne({ where: { id } });
      return res.status(httpStatus.OK).json(slide);
    }
    return res.status(httpStatus.NOT_FOUND).json({
      msg: "Slide not found",
    });
  }
}

module.exports = SlideController;

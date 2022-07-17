const { Testimonials } = require("../models");
const httpStatus = require("../helpers/httpStatus");

class TestimonialsController {

  static async register(req, res) {     
    const { name, content, image } = req.body;
    let testimonials;
    try {
        testimonials = await Testimonials.create({name, content, image});
    } catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message })
    }
    return res.status(httpStatus.CREATED).json(testimonials);
  }

  static async deleteById(req, res) {
    let deleteTestimonials;
    try {
      deleteTestimonials = await Testimonials.destroy({ where: { id: req.params.id } });
    } catch (err) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: err.message });
    }
    if(deleteTestimonials){
        return res.status(httpStatus.OK).json({ message: "Testimonials deleted"});
    }
    return res
          .status(httpStatus.NOT_FOUND)
          .json({ message: "Testimonials not found" });
  }

}

module.exports = TestimonialsController;
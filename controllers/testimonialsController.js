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
}

module.exports = TestimonialsController;
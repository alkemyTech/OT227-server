const { Testimonials } = require("../models");
const httpStatus = require("../helpers/httpStatus");

class TestimonialsController {
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
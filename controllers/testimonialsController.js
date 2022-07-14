const { Testimonials } = require("../models");
const httpStatus = require("../helpers/httpStatus");

class TestimonialsController {
  static async update(req, res){
    const { name, image, content} = req.body; 
    const bodyUpdate = {
     name,
     image,
     content
    }
    let testimonialUpdated;

    try {
      testimonialUpdated = await Testimonials.update(bodyUpdate, {where: {id: req.params.id}});
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({msg: error.message})
    }

    if(testimonialUpdated[0]){
      const testimonials = await Testimonials.findOne({ where: { id: req.params.id },attributes: ['name','image','content']});
      return res.status(httpStatus.OK).json(testimonials);
    }
    return res.status(httpStatus.NOT_FOUND).json({
      msg: 'Testimonials not found'
    });
  }
}

module.exports = TestimonialsController;
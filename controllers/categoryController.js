const { Category } = require('../models');
const httpStatus = require('../helpers/httpStatus');

class categoryController {
  static async getAllCategories(req, res) {
   try {
    const categories = await Category.findAll({attributes: ['name']});
    return res.status(httpStatus.OK).json(categories);
   } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
   }
  }
}

module.exports = categoryController;
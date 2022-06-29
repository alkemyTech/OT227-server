const { Category } = require('../models');
const httpStatus = require('../helpers/httpStatus');

class categoryController {
  static async getAllCategories(req, res) {
   let categories = [];
   try {
    const results = await Category.findAll();
    results.forEach( category => {
        categories.push(category.name);
    });
    return res.status(httpStatus.OK).json(categories);
   } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
   }
  }
}

module.exports = categoryController;
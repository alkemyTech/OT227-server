const { Category } = require("../models");
const httpStatus = require("../helpers/httpStatus");

class categoryController {
  static async getAllCategories(req, res) {
    try {
      const categories = await Category.findAll({ attributes: ["name"] });
      return res.status(httpStatus.OK).json(categories);
    } catch (err) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: err.message });
    }
  }

  static async deleteCategory(req, res) {
    const { id } = req.params;
    try {
      const resolve = await Category.destroy({ where: { id } });
      if (!resolve) {
        return res
          .status(httpStatus.NOT_FOUND)
          .json({ message: "Category not found" });
      }
      return res.status(httpStatus.OK).json({ message: "Category deleted" });
    } catch (err) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: err.message });
    }
  }

  static async getCategoryById(req, res) {
    const { id } = req.params;
    try {
      const category = await Category.findOne({ where: { id: +id } , attributes: ["name", "description", "image"]});
      if (!category) {
        return res
          .status(httpStatus.NOT_FOUND)
          .json({ message: "Category not found" });
      }
      return res.status(httpStatus.OK).json(category);
    } catch (err) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: err.message });
    }
  }
}

module.exports = categoryController;


const { Category } = require("../models");
const httpStatus = require("../helpers/httpStatus");
const pagination = require('../helpers/pagination');

class categoryController {


  static async updateCategoryById(req, res) {

        let category;

        try {

            category = await Category.findByPk(req.params.id);

        } catch (err) {
            return res.status(httpStatus.NOT_FOUND).json({ message: err.message });
        }

        try {

            category.set(req.body);

            await category.save();

            return res.status(httpStatus.OK).json(category);

        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
        }
  }

  static async getAllCategories(req, res) {

    let page = req.query.page ? req.query.page :1;
    let dataPerPage = 10;
    let categories;

    try {
      categories  = await Category.findAndCountAll({ 
        attributes: ["name"], 
        limit: dataPerPage,
        offset:((page-1) * dataPerPage)
      });
    } catch (err) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: err.message });
    }

    const result = pagination({
      data: categories.rows,
      count: categories.count,
      page,
      dataPerPage,
    });

    res.status(httpStatus.OK).json(result);

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
  
  static async createCategory(req, res) {
        try {

            const newCategory = await Category.create(req.body);

            await newCategory.save();

            return res.status(httpStatus.CREATED).json(newCategory);

        } catch (err) {

            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message })


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


const { Category } = require('../models');
const httpStatus = require('../helpers/httpStatus');


class CategoryController {

    static async updateCategoryById(req, res) {

        let category;

        try {

            category = await Category.findByPk(req.params.id);

        } catch (err) {
            return res.status(httpStatus.NOT_FOUND).json({ message: err.message });
        }

        try {

            await category.set(req.body);

            await category.save();

            return res.status(httpStatus.OK).json(category);

        } catch (err) {

            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });

        }

    }
}

module.exports = CategoryController;

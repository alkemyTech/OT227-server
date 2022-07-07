const { Category } = require('../models');
const httpStatus = require('../helpers/httpStatus');


class CategoryController {

    static async createCategory(req, res) {

        const name = req.body.name || '';

        if ((name === '') || (typeof (name) !== 'string')) {

            return res.status(httpStatus.BAD_REQUEST);

        }

        try {

            const newCategory = await Category.create(req.body);

            await newCategory.save();

            return res.status(httpStatus.CREATED).json(newCategory);

        } catch (err) {

            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message })

        }

    }
}

module.exports = CategoryController;

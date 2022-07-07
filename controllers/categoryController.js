const { Category } = require('../models');
const httpStatus = require('../helpers/httpStatus');


class CategoryController {

    static async updateCategoryById(req, res) {

        const name = req.body.name || '';

        const description = req.body.description || '';

        const image = req.body.image || '';

        if ((name === '' || description === '' || image === '') || (typeof (image) !== 'string' || typeof (description) !== 'string' || typeof (image) !== 'string')) {

            return res.status(httpStatus.BAD_REQUEST);

        }


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
}

module.exports = CategoryController;

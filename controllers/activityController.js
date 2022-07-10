const { Activity } = require('../models');
const httpStatus = require('../helpers/httpStatus');

class activityController {

    static async createActivity(req, res) {

        try {

            const newActivity = await Activity.create(req.body);

            await newActivity.save();

            return res.status(httpStatus.CREATED).json(newActivity);

        } catch (err) {

            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message })

        }

    }
}

module.exports = activityController;
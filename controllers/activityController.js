const { Activity } = require('../models');
const httpStatus = require('../helpers/httpStatus');

class activityController {

    static async getAllActivities(req, res) {

        try {
            const activities = await Activity.findAll();

            return res.status(httpStatus.OK).json(activities);
        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
        }

    }
}

module.exports = activityController;
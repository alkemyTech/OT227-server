const { Activity } = require("../models");
const httpStatus = require("../helpers/httpStatus");

class activityController {
  static async createActivity(req, res) {
    try {
      const newActivity = await Activity.create(req.body);

      await newActivity.save();

      return res.status(httpStatus.CREATED).json(newActivity);
    } catch (err) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: err.message });
    }
  }

  static async modifyActiviy(req, res) {
    const { id } = req.params;
    const { content, image } = req.body;

    if (!content && !image) {
      return res.status(httpStatus.BAD_REQUEST).json({
        msg: "Not have fields to update",
      });
    }
    const bodyUpdate = {
      content,
      image,
    };
    let updatedActivity;
    try {
      updatedActivity = await Activity.update(bodyUpdate, {
        where: { id },
      });
    } catch (error) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ msg: error.message });
    }
    if (updatedActivity[0]) {
      const activity = await Activity.findOne({ where: { id } });
      return res.status(httpStatus.OK).json(activity);
    }
    return res.status(httpStatus.NOT_FOUND).json({
      msg: "Activity not found",
    });
  }
}
module.exports = activityController;

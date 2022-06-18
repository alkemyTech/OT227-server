const { User } = require('../models');
const bcrypt = require('bcrypt');
const httpStatus = require('../helpers/httpStatus');

class UserController {
  static async login(req, res) {
    const { body } = req;
    try {
      const user = await User.findOne({ where: { email: body.email } });
      if (!user) {
        return res
          .status(httpStatus.UNAUTHORIZED)
          .json({ ok: false, message: 'Invalid credentials' });
      }
      const isMatch = await bcrypt.compare(body.password, user.password);
      if (!isMatch) {
        return res
          .status(httpStatus.UNAUTHORIZED)
          .json({ ok: false, message: 'Invalid credentials' });
      }
      return res.status(httpStatus.OK).json(user);
    } catch (err) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err.name);
    }
  }
}

module.exports = UserController;

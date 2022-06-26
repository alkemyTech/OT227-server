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

  static async deleteUserById(req, res) {
    try {
      const deletedUser = await User.destroy({ where: { id: req.params.id } });

      if (deletedUser) {
        return res
          .status(httpStatus.OK)
          .json({ message: 'User deleted succesfully' });
      }

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ message: 'User not found' });
    } catch (err) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: err.message });
    }
  }

  static async register(req, res) {
    const { firstName, lastName, email, password, image, roleId } = req.body;
    const saltRounds = 10;
    try {
      const user = await User.create({
        firstName,
        lastName,
        email,
        password: await bcrypt.hash(password, saltRounds),
        image,
        roleId,
      });

      return res.status(httpStatus.OK).json(user);
    } catch (err) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: err.message });
    }
  }
}

module.exports = UserController;

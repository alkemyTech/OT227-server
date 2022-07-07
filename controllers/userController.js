const { User } = require('../models');
const bcrypt = require('bcrypt');
const httpStatus = require('../helpers/httpStatus');
const tokenManagement = require('../helpers/tokenManagement');
const { sendWelcomeEmail } = require('../services/mailService');

const STANDARD_USER=2;

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

  static async userUpdate(req, res) {
    const id = parseInt(req.params.id);
    const { body } = req;

    if (body.password) {
      const saltRound = 10;
      const newPassword = await bcrypt.hash(body.password, saltRound);
      body.password = newPassword;
    }

    try {
      const user = await User.findOne({ where: { id } });
      if (!user) {
        return res
          .status(httpStatus.NOT_FOUND)
          .json({ message: 'User not found' });
      }
    } catch (er) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: er.message });
    }

    try {
      await User.update(body, { where: { id } });
      res.status(httpStatus.OK).json({ message: 'User updated' });
    } catch (err) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: err.message });
    }
  }

  static async getAllUsers(req, res) {

    try {

      const users = await User.findAll();

      return res
        .status(httpStatus.OK)
        .json(users);

    } catch (err) {

      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: err.message });

    }

  }

  static async register(req, res) {
    const { firstName, lastName, email, password, image, roleId=STANDARD_USER } = req.body;
    const saltRounds = 10;
    let user;

    try {
      user = await User.create({
        firstName,
        lastName,
        email,
        password: await bcrypt.hash(password, saltRounds),
        image,
        roleId,
      });
    } catch (err) {
      return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
    }
    const token = tokenManagement.tokenSign(user);
    
    sendWelcomeEmail(email,firstName);
    return res.status(httpStatus.OK).json(token);
  }
}

module.exports = UserController;

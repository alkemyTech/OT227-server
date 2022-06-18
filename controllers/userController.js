const { User } = require('../models');
const bcrypt = require('bcrypt');
class UserController {
  static async login(req, res) {
    const { body } = req;
    try {
      const user = await User.findOne({ where: { email: body.email } });
      if (!user) {
        return res
          .status(400)
          .json({ ok: false, message: 'Invalid credentials' });
      }
      const isMatch = await bcrypt.compare(body.password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ ok: false, message: 'Invalid credentials' });
      }
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json(err.name);
    }
  }
}

module.exports = UserController;

const { User } = require('../models');
const bcrypt = require('bcrypt');
class UserController {
  static async login(req, res) {
    const { body } = req;
    try {
      const user = await User.findOne({ where: { email: body.email } });
      if (!user) {
        res.status(400).json({ ok: false });
      }
      const isMatch = await bcrypt.compare(body.password, user.password);
      if (!isMatch) {
        res.status(400).json({ ok: false });
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err.name);
    }
  }
}

module.exports = UserController;

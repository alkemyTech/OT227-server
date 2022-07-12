const jwt = require("jsonwebtoken");

const httpStatus = require("../helpers/httpStatus");
const UserRoles = require("../constants/userRoles");
const { User } = require("../models");

class CheckRoleId {
  static async isAdmin(req, res, next) {
    const { authorization } = req.headers;

    if (authorization) {
      const [, token] = authorization.split(" ");
      const { user } = await jwt.verify(token, process.env.SECRET_JWT_KEY);

      const { roleId } = await User.findOne({ where: { email: user } });

      if (roleId === UserRoles.roles.Admin) {
        return next();
      }
    }
    return res.status(httpStatus.UNAUTHORIZED).json({
      message: "You are not authorized to perform this action",
    });
  }
}

module.exports = CheckRoleId;

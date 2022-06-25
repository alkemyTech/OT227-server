const httpStatus = require('../helpers/httpStatus');
const UserRoles = require('../constants/userRoles');

class CheckRoleId {
  static async isAdmin(req, res, next) {
    const { authorization } = req.headers;

    if (authorization) {
      const [, token] = authorization.split(' ');
      const { roleId } = await jwt.verify(token, process.env.JWT_SECRET);

      if (roleId === UserRoles.roles.Admin) {
        return next();
      }

      return res.status(httpStatus.UNAUTHORIZED).json({
        message: 'You are not authorized to perform this action',
      });
    }
  }
}

module.exports = CheckRoleId;

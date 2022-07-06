const jwt = require("jsonwebtoken");

class Authenticate {
  static validate(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: "No token provided",
      });
    }
    const verified = jwt.verify(token, process.env.SECRET_JWT_KEY);
    if (!verified) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: "Invalid token",
      });
    }
    next();
  }
}

module.exports = {
  Authenticate,
};



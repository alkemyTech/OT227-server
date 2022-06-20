const jwt = require('jsonwebtoken')


const authenticate = (req, res, next) => {

    const token = req.headers.authorization?.split(' ')[1];

    const verified = jwt.verify(token, process.env.SECRET_JWT_KEY);

    req.token = verified.user;

    next();

}

module.exports = {authenticate}
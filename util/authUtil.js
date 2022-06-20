const jwt = require('jsonwebtoken');

const createJWTToken = (user) => {
    return jwt.sign({user}, process.env.SECRET_JWT_KEY,{
        expiresIn: '1d'
    });
}

module.exports = {
    createJWTToken
}
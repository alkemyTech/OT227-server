const jwt = require('jsonwebtoken');

class tokenManagement {
    
    static tokenSign(user) {
        const token = jwt.sign({
            user: user.email
        }, process.env.SECRET_JWT_KEY, {
            expiresIn: '1h'
        });
        return {token};
    }
}

module.exports = tokenManagement;
const welcomeEmailTemplate = require('../templates/welcomeEmailTemplate');

class sendTemplate {
    static welcomeTemplate (user) {
        return welcomeEmailTemplate(user);
    }
}

module.exports = sendTemplate;
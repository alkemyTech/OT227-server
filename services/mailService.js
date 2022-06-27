require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const {welcomeTemplate} = require('../helpers/sendTemplates');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

class MailService {
  static async sendMail(to, from, subject, template_id) {
    const message = {
      to,
      from,
      subject,
      template_id,
    };
    try {
      sgMail.send(message);
    } catch (err) {
      console.log(err);
    }
  }

  static sendWelcomeEmail(to, from, subject, nameUser) {
    this.sendMail(to, from, subject, welcomeTemplate(nameUser));
  }
}

module.exports = MailService;

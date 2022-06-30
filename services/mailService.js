require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const {welcomeTemplate} = require('../helpers/sendTemplates');
sgMail.setApiKey(process.env.SG_API_KEY);

class MailService {
  static async sendMail(to, from, subject, html) {
    try {
      sgMail.send({
        to,
        from,
        subject,
        html,
      });
    } catch (err) {
      console.log(err);
    }
  }

  static async sendWelcomeEmail(to, nameUser) {
    await MailService.sendMail(to, process.env.SG_HOST_EMAIL, 'Confirmación de registro', (await welcomeTemplate(nameUser)));
  }
}

module.exports = MailService;

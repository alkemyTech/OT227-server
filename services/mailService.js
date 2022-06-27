require('dotenv').config();
const { welcomeTemplate } = require('../helpers/sendTemplates');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

class MailService {
  static async sendMail(to, from, subject, nameUser) {
    const message = {
      to,
      from,
      subject,
      template_id: welcomeTemplate(nameUser)
    };
    try {
      sgMail.send(message);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = MailService;

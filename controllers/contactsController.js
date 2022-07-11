const {Contact} = require('../models/index');
const httpStatus = require("../helpers/httpStatus");

class ContactsController {
  static async register(req,res){
   const {name, email, message, phone} = req.body;
   let contact;
   try {
    contact = await Contact.create({
     name,
     email,
     message,
     phone
    });
   } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
     msg: error.message
    });
   }
   return res.status(httpStatus.OK).json(contact);
  }

  static async getContacts(req,res){
    let contacts;
    try {
      contacts = await Contact.findAll();
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      msg: error.message
      });
    }
    return res.status(httpStatus.OK).json(contacts);
    }
  
}

module.exports = ContactsController;


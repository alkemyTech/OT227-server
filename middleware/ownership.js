'use strict';
const jwt            = require('jsonwebtoken');
const { response }   = require('express');
const { User }  = require('../models');
const httpStatus = require('../helpers/httpStatus');

class Role {

  static async adminRole( req, res = response) {  

    const token = req.headers.authorization.split(" ")[1];

    if ( !token ){
      return res.status(httpStatus.UNAUTHORIZED).json({
        msg: 'Not has token in the request'
      });
    }

    const { id } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );
        
    const users = await User.findByPk( id );

    if(!users){
      return res.status( httpStatus.FORBIDDEN ).json({
        msg: 'User not found'
      } 
    )}      

    return res.status( httpStatus.OK ).json({
      msg: 'User authorizaded'
    });          
      
  }
}

module.exports = Role;
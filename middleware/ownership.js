'use strict';
const jwt            = require('jsonwebtoken');
const { response }   = require('express');
const { Role }  = require('../models');
const httpStatus = require('../helpers/httpStatus');

class Roles {

  static async adminRole( req, res = response, next) {    

    const token = req.headers.authorization.split(" ")[1];

    const { userId } = req.params;

    if ( !token || !userId ){
      return res.status(httpStatus.UNAUTHORIZED).json({
        msg: 'Not has token or userId in the request'
      });
    }
  
    const { id, roleId } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );

    const admin = await Role.findOne({ where: { name: 'Admin' } });

    if( userId === id || admin.id === roleId){
      return next();
    }

    return res.status(httpStatus.UNAUTHORIZED).json({
      msg: 'User not atuthorized'
    });

  }
}

module.exports = Roles;
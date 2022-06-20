'use strict';
const jwt            = require('jsonwebtoken');
const { response }   = require('express');
const { User }  = require('../models');
const httpStatus = require('../helpers/httpStatus');

class Role {

  static async adminRole( req, res = response) {

    const token = req.header('x-token');

      if ( !token ){
        return res.status(httpStatus.UNAUTHORIZED).json({
          msg: 'Not has token in the request'
        });
      }

      const { userId } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );
        
      try {
      
        const users = await User.findByPk( userId );

        if(!users){
          return res.status( httpStatus.FORBIDDEN ).json({
            msg: 'User not found'
          } 
         )}      

        return res.status( httpStatus.OK ).json({
          msg: 'User authorizaded'
        });
            
      } catch (err) {

        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
          msg: 'Token not valid'
        });
            
      }
}
}

module.exports = Role;
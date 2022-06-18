'use strict';
const jwt            = require('jsonwebtoken');
const { response }   = require('express');
const { sequelize }  = require('../models/index');
const { QueryTypes } = require('sequelize');

//Verify admin role
const adminRole = async (req, res = response, next) => {

        const token = req.header('x-token');

        if ( !token ){
            return res.status(401).json({
                msg: 'Not has token in the request'
            });
        }

        try {

            //Get userID related with the token
            const { userId } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );

            //Search user related with userId
            
            const users = await sequelize.query('SELECT * FROM Users WHERE id="' + userId + '"', { type: QueryTypes.SELECT });

            //Verify if the user it was found
            if(!users){
                return res.status(403).json({
                    msg: 'User not found with userId'
                } 
            )}       

            next();
            
        } catch (err) {

            res.status(401).json({
                msg: 'token not valid'
            });
            
        }
}

module.exports = {
    adminRole
}
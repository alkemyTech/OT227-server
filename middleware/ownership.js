'use strict';
const jwt            = require('jsonwebtoken');
const { response }   = require('express');
const { User }  = require('../models/user');

const adminRole = async (req, res = response, next) => {

        const token = req.header('x-token');

        if ( !token ){
            return res.status(401).json({
                msg: 'Not has token in the request'
            });
        }

        try {

            const { userId } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );
            
            const users = await User.findByPk(2);

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
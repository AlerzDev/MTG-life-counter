/**
 * Created by alejandrolemusrodriguez on 26/03/17.
 */

'use strict';

const User = require('../models/user');
const bcrypt = require('bcrypt-nodejs');
const validate = require('../models/validate_schemas/user');


function createUser(req, res) {

    let user = new User();
    let params = req.body;

    //validate schema for user
    if(validate(params)){
        bcrypt.hash(params.password, null, null, (error, hash)=>{
            user.username = params.username;
            user.role     = params.role;
            user.password = hash;
            user.email    = params.email;
            user.save((error, userStored)=>{
                if(error){
                    res.status(500).send({error: 'error-db'});
                }else {
                    if(userStored) {
                        res.status(201).send({status: 'ok', userStored});
                    }else{
                        res.status(404).send({error: 'error-created'});
                    }
                }
            });
        })
    }else {
        res.status(200).send({error: validate.errors[0].field});
    }

}

module.exports = {
    createUser
};
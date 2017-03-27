/**
 * Created by alejandrolemusrodriguez on 26/03/17.
 */
'use strict';

const bcrypt = require('bcrypt-nodejs');
const User = require('../models/user');
const validate = require('../models/validate_schemas/session');
const jwt = require('../services/jwt');

function LogIn(req, res) {
    let user = User();
    let params = req.body;
    if(validate(params)){
        User.findOne({username: params.username}, (error, user)=>{
            if(user){
                bcrypt.compare(params.password ,user.password, (error, check)=>{
                    if(check){
                        if(params.getHash){
                            const token_session = jwt.createToken(user);
                            res.status(200).send({status: 'ok', user, token_session: token_session});
                        }else {
                            res.status(200).send({status: 'ok', user});
                        }
                    }else {
                        if(error){
                            res.status(500).send({error: 'error-bcrypt'});
                        }else {
                            res.status(200).send({error: 'user-password'});
                        }
                    }
                })
            }else {
                if(error){
                    res.status(500).send({error: 'error-db'});
                }else {
                    res.status(200).send({error: 'not-exist'});
                }
            }
        });
    }else {
        res.status(200).send({error: validate.errors[0].field});
    }
}

module.exports = {
    LogIn
};
/**
 * Created by alejandrolemusrodriguez on 27/03/17.
 */
'use strict';

const jwt = require('jwt-simple');
const moment = require('moment');
const secret = '$AlamierdaAdmin';
const constants = require('../utils/constants');

exports.ensureAuthAdmin = function (req, res, next) {
    if(req.headers.authorization){
        return res.status(403).send({error: 'no-authorization'});
    }else {
        const token = req.headers.authorization.replace(/['"]+/g, '');

        try {
            var payload = jwt.decode(token, secret);
            if(payload.exp <= moment().unix()){
                return res.status(404).send({error:'error-token-expired'});
            }else {
                if(constants.ROLE_ADMIN != payload.role){
                    return res.status(404).send({error: 'error-role-valid'});
                }
            }
        } catch (ex) {
            return res.status(404).send({error:'error-token-valid'});
        }
    }
    req.user = payload;
    next();
};
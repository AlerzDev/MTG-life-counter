/**
 * Created by alejandrolemusrodriguez on 26/03/17.
 */
'use strict';

const jwt = require('jwt-simple');
const moment = require('moment');
const secret = '$Alamierda2018';

exports.ensureAuth = function (req, res, next) {
    if(!req.headers.authorization) {
        return res.status(403).send({error: 'no-authorization'});
    }else {
        const toke = req.headers.authorization.replace(/['"]+/g,'');
        try {
            var payload = jwt.decode(toke, secret);
            if(payload.exp <= moment().unix()){
                return res.status(404).send({error:'error-token-expired'});
            }else {

            }
        }catch (ex){
            return res.status(404).send({error:'error-token-valid'});
        }
    }
    req.user = payload;
    next();
};
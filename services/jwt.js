/**
 * Created by alejandrolemusrodriguez on 26/03/17.
 */
'use strict';

const jwt = require('jwt-simple');
const moment = require('moment');
const secret = '$Alamierda2018';

exports.createToken = function (user) {
    const payload = {
        sub: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        iat: moment().unix(),
        exp: moment().add(15, 'days').unix()
    };
    return jwt.encode(payload, secret);
};
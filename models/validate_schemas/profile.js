/**
 * Created by alejandrolemusrodriguez on 27/03/17.
 */
'use strict';

const validator = require('is-my-json-valid');

const validateProfile = validator({
    required: true,
    type: 'object',
    properties: {
        avatar: {
            required: true,
            type: 'string'
        },
        full_name:{
            required: true,
            type: 'string'
        },
        birthdate:{
            required: true,
            type: 'string'
        },
        user: {
            required: true,
            type: 'string'
        }
    }
});

module.exports = validateProfile;
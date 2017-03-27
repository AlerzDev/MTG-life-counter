/**
 * Created by alejandrolemusrodriguez on 26/03/17.
 */
const validator = require('is-my-json-valid');

const validateUser = validator({
    required: true,
    type: 'object',
    properties: {
        username: {
            required: true,
            type: 'string'
        },
        email:{
            required: true,
            type: 'string'
        },
        password:{
            required: true,
            type: 'string'
        },
        role: {
            required: true,
            type: 'string'
        }
    }
});

module.exports = validateUser;
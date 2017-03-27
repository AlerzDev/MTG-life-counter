/**
 * Created by alejandrolemusrodriguez on 26/03/17.
 */
const validator = require('is-my-json-valid');

const validateSession = validator({
    required: true,
    type: 'object',
    properties: {
        username: {
            required: true,
            type: 'string'
        },
        password:{
            required: true,
            type: 'string'
        },
        email:{
            required:false,
            type: 'string'
        },
        token_session:{
            required: false,
            type: 'string'
        },
        role:{
            required: false,
            type: 'string'
        },
        getHash:{
            required: true,
            type: 'string'
        }
    }
});

module.exports = validateSession;
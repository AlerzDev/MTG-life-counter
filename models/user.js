/**
 * Created by alejandrolemusrodriguez on 26/03/17.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    username : String,
    email    : String,
    password : String,
    role     : String
});

module.exports = mongoose.model('User', userSchema);




/**
 * Created by alejandrolemusrodriguez on 26/03/17.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = Schema({
    avatar   : String,
    full_name: String,
    birthdate: Date,
    user     : {type: Schema.ObjectId}
});

module.exports = mongoose.model('Profile', profileSchema);
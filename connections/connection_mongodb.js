/**
 * Created by alejandrolemusrodriguez on 26/03/17.
 */

'use strict';

const constants = require('../utils/constants');
const mongoose  = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(constants.URL_MONGO_DB,(error)=>{
    //Print error connection with mongo
    if(error) console.error('There is an error:'+ error);
    //Print success connection with mongo
    else console.log('Connection with mongodb was successful :D');
});

module.exports = mongoose;
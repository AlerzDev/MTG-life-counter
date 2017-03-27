/**
 * Created by alejandrolemusrodriguez on 26/03/17.
 */
'use strict';

const URL_MONGO_DB = 'mongodb://192.168.0.28:27017/mtg_life_counter';
const PORT         = process.env.PORT || 3000;


//noinspection JSUnresolvedVariable
module.exports = {
    URL_MONGO_DB: URL_MONGO_DB,
    PORT: PORT
};
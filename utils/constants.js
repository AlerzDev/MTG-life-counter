/**
 * Created by alejandrolemusrodriguez on 26/03/17.
 */
'use strict';

const URL_MONGO_DB = 'mongodb://localhost:27017/mtg_life_counter';
const PORT         = process.env.PORT || 3000;
const ROLE_ADMIN   = 'admin';

//noinspection JSUnresolvedVariable
module.exports = {
    URL_MONGO_DB: URL_MONGO_DB,
    PORT: PORT,
    ROLE_ADMIN: ROLE_ADMIN
};
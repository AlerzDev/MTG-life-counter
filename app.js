'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const constants = require('./utils/constants');
const connection_mongo = require('./connections/connection_mongodb');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//load routes
const user_routes = require('./routes/user');
const session_routes = require('./routes/session');

//load route base
app.use('/api', user_routes);
app.use('/api', session_routes);

//Server running
app.listen(constants.PORT,()=>{
    console.log('Server running on the port: '+ constants.PORT);
});
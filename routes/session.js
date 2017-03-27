/**
 * Created by alejandrolemusrodriguez on 26/03/17.
 */
'use strict';

const express = require('express');
const SessionController = require('../controllers/sessions');

const api = express.Router();

api.post('/log-in', SessionController.LogIn);

module.exports = api;
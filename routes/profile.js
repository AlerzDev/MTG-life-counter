/**
 * Created by alejandrolemusrodriguez on 27/03/17.
 */

'use strict';

const express = require('express');
const ProfileController = require('../controllers/profiles');
const md_auth = require('../middlewares/authenticated');
const api =  express.Router();


api.post('/new-profile',md_auth.ensureAuth,ProfileController.createdProfile);
api.get('/get-profile',md_auth.ensureAuth, ProfileController.getProfile);

module.exports = api;
'use strict';

const express = require('express');
const UserController = require('../controllers/users');
const md_auth = require('../middlewares/authenticated');
const api =  express.Router();

api.post('/new-user', UserController.createUser);
api.get('/all-users', md_auth.ensureAuth, UserController.allUsers);

module.exports = api;
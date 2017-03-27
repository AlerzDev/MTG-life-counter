'use strict';

const express = require('express');
const UserController = require('../controllers/users');

const api =  express.Router();

api.post('/new-user', UserController.createUser);

module.exports = api;
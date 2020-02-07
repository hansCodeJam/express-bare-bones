const express = require('express');
const router = express.Router();
const users = require('../Model/Users')
const userController = require('../controllers/userController')

router.get('/', userController.getAllUsers);

module.exports = router;
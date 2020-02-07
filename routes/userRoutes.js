const express = require('express');
const router = express.Router();
const users = require('../Model/Users')
const userController = require('../controllers/userController')

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getSingleUser);
router.post('/', userController.createUser);

module.exports = router;
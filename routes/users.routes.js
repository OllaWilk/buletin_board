const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.controllers');

router.get('/users', UserController.getUsers);
router.get('/users/:id', UserController.getId);

module.exports = router;
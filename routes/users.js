const express = require('express');
const router = express.Router();
const usersController = require('../controller/usersController')

router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.get('/profile', usersController.perfil);
router.get('/profile-edit', usersController.editar_perfil);
module.exports = router;

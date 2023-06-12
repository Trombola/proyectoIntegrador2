const express = require('express');
const router = express.Router();
const usersController = require('../controller/usersController')

router.get('/login', usersController.login);
router.post('/login', usersController.login_check)
router.get('/logout', usersController.logout)
router.get('/register', usersController.register);
router.post('/register', usersController.create)
router.get('/profile', usersController.perfil);
router.get('/profile/:id', usersController.perfil_id);
router.get('/profile-edit', usersController.editar_perfil);
router.get('/search-usuario', usersController.usuarioResults);
module.exports = router;

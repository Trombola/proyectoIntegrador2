const express = require('express');
const router = express.Router();
const usersController = require('../controller/usersController')

//Login
router.get('/login', usersController.login);
router.post('/login', usersController.login_check)

//Logout
router.get('/logout', usersController.logout)

//Registro
router.get('/register', usersController.register);
router.post('/register', usersController.create)

//Perfil, usando el parametro obligatorio id
router.get('/profile/:id', usersController.perfil_id);

//Busqueda de usuarios
router.get('/search-usuario', usersController.usuarioResults);

//Editar perfil
router.get('/profile-edit',usersController.editarperfil)
router.post('/update',usersController.guardarprofile)

module.exports = router;

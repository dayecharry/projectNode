const express = require('express');

const { getCharacters } = require('../controllers/characters.controller');

//const { isAuth, isAdmin, logout } = require('../../middlewares/auth');
const router = express.Router();

router.get('/', getCharacters);

module.exports = router;

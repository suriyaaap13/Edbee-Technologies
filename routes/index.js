const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

router.post('/', homeController.home);

module.exports = router;
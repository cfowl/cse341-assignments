const router = require('express').Router();

// API docs route
router.use('/', require('./swagger'));

// contacts route
router.use('/contacts', require('./contacts'));

module.exports = router;
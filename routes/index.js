const router = require('express').Router();

router.get('/', (req, res) => res.send('William Fowler'));
router.use('/contacts', require('./contacts'));

module.exports = router;
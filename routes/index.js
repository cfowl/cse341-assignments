const router = require('express').Router();

// routes.get('/', (req, res) => {
//     res.send('William Fowler');
// });

router.use('/contacts', require('./contacts'));

module.exports = router;
const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('William Fowler');
});

module.exports = routes;
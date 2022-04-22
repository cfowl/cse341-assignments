const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Sage Fowler');
});

module.exports = routes;
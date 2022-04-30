const router = require('express').Router();

// home route
router.get('/', (req, res) => {
    let html = 'William Fowler';
    html += '<ul>';
    html += `<li><a href="/contacts">Contacts</a></li>`;
    html += '</ul>';
    res.send(html);
});

// contacts route
router.use('/contacts', require('./contacts'));

module.exports = router;
const router = require('express').Router();

router.get('/', (req, res) => {
    let html = 'William Fowler';
    html += '<ul>';
    html += `<li><a href="/contacts">Contacts</a></li>`;
    html += '</ul>';
    res.send(html);
});
router.use('/contacts', require('./contacts'));

module.exports = router;
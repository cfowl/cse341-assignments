const router = require('express').Router();

const contactsController = require('../controllers/contacts');

// contacts route
router.get('/', contactsController.getAllContacts);

// contacts/id route
router.get('/:id', contactsController.getOneContact);

module.exports = router;
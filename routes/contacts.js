const router = require('express').Router();
const contactsController = require('../controllers/contacts');

// gets all contacts at /contacts route
router.get('/', contactsController.getAllContacts);

// gets one contact at /contacts/id route
router.get('/:id', contactsController.getOneContact);

// creates new contact at /contacts route
router.post('/', contactsController.createContact);

// updates a contact at /contacts/id route
router.put('/:id', contactsController.updateContact);

// deletes a contact at /contacts/id route
router.delete('/:id', contactsController.deleteContact);

module.exports = router;
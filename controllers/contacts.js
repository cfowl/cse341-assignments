const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

// gets all contacts
async function getAllContacts(req, res) {
  const result = await mongodb.getDb().db().collection('contacts').find();
  try {
    result.toArray().then(data => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(data);
    });
  } catch (err) {
    res.status(500).json({message: err.message});
  }
}

// gets one contact by ID
async function getOneContact(req, res) {
  try {
    const userID = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('contacts').find({_id: userID});
    result.toArray().then(data => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(data[0]);
    });
  } catch (err) {
    res.status(500).json({message: err.message});    
  }
}

// creates a new contact
async function createContact(req, res) {
  try {
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday,
      number: req.body.number,
      party: req.body.party,
      term: req.body.term
    };
  
    const result = await mongodb.getDb().db().collection('contacts').insertOne(contact);
    console.log(result);
  
    if(result.acknowledged) res.status(201).json(result);
    else res.status(500).json(result.error || `An error occurred while inserting contact ${contact}`);
    
  } catch (err) {
    res.status(500).json({message: err.message});    
  }
}

// updates a contact by ID
async function updateContact(req, res) {
  try {
    const userID = new ObjectId(req.params.id);
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday,
      number: req.body.number,
      party: req.body.party,
      term: req.body.term
    };
  
    console.log(contact);
  
    const result = await mongodb.getDb().db().collection('contacts').replaceOne({_id: userID}, contact);
    console.log(result);
  
    if(result.modifiedCount > 0) res.status(204).send();
    else res.status(500).json(result.error || `An error occurred while updating id ${userID}`);
    
  } catch (err) {
    res.status(500).json({message: err.message});    
  }
}

// deletes a contact by ID
async function deleteContact(req, res) {
  try {
    const userID = new ObjectId(req.params.id);
  
    const result = await mongodb.getDb().db().collection('contacts').deleteOne({_id: userID});
    console.log(result);
  
    if(result.deletedCount > 0) res.status(204).send();
    else res.status(500).json(result.error || `An error occurred while deleting id ${userID}`);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
}

module.exports = {
  getAllContacts,
  getOneContact,
  createContact,
  updateContact,
  deleteContact
};
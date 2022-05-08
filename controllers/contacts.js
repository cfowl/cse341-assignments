const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

async function getAllContacts(req, res) {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then(data => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data);
  });
}

async function getOneContact(req, res) {
  const userID = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('contacts').find({_id: userID});
  result.toArray().then(data => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data[0]);
  });
}

async function createContact(req, res) {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  const result = await mongodb.getDb().db().collection('contacts').insertOne(contact);
  console.log(result);

  if(result.acknowledged) res.status(201).json(result);
  else res.status(500).json(result.error || `An error occurred while inserting contact ${contact}`);
}

async function updateContact(req, res) {
  const userID = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  console.log(contact);

  const result = await mongodb.getDb().db().collection('contacts').replaceOne({_id: userID}, contact);
  console.log(result);

  if(result.modifiedCount > 0) res.status(204).send();
  else res.status(500).json(result.error || `An error occurred while updating id ${userID}`);
}

async function deleteContact(req, res) {
  const userID = new ObjectId(req.params.id);

  const result = await mongodb.getDb().db().collection('contacts').deleteOne({_id: userID});
  console.log(result);

  if(result.deletedCount > 0) res.status(204).send();
  else res.status(500).json(result.error || `An error occurred while deleting id ${userID}`);
}

module.exports = {
  getAllContacts,
  getOneContact,
  createContact,
  updateContact,
  deleteContact
};
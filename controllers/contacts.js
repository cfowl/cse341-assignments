const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

async function getAllContacts(req, res, next) {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then(data => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data);
  });
};

async function getOneContact(req, res, next) {
  const userID = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('contacts').find({_id: userID});
  result.toArray().then(data => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data[0]);
  });
};

module.exports = {
  getAllContacts,
  getOneContact
};
const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient

let _db;

const initDb = async () => {
  const client = await MongoClient.connect("mongodb://localhost:27017")
  _db = client.db('rest-api')
};

const getDb = () => {
  if (!_db) {
    throw Error('Database not initialized');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb
};

const dotenv = require('dotenv');
dotenv.config();
const {MongoClient} = require('mongodb');

let _database;

function initDb(callback) {

    if(_database) {
        console.log('Database is already initialized!');
        return callback(null, _database);
    }

    const client = new MongoClient();
    
    client.connect('mongodb+srv://admin:admin@cluster0.uasjs.mongodb.net/cse341?retryWrites=true&w=majority')
    .then(client => {
        _database = client;
        callback(null, _database);
    })
    .catch(error => {
        callback(error);
    });

}

function getDb() {
    if(!_database) throw Error('Database not initialized!');
    return _database;
}

module.exports = {
    initDb,
    getDb
};

// const dotenv = require('dotenv');
// dotenv.config();
// const {MongoClient} = require('mongodb');

// async function main() {
//     // add later
//     const uri = process.env.MONGO_URI;
//     const client = new MongoClient(uri);
    
//     try {
//         await client.connect();
//         await listDatabases(client);
//     }
//     catch(e) {
//         console.error(e);
//     }
//     finally {
//         await client.close();
//     }

// }

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// main().catch(console.error);
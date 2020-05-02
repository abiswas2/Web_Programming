const path = require('path');

const properties = require(path.join(__dirname, '..', 'config.js'));
const MongoClient = require('mongodb').MongoClient;

const user = properties['db.mongo.user'];
const secret = properties['db.mongo.secret'];

const uri = `mongodb+srv://${user}:${secret}@cluster0-fh1so.mongodb.net?retryWrites=true&w=majority`
const getDbClient = () => {
    return new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).connect();
};

module.exports = {
    checkConnection: () => {
        return getDbClient(
            // No Args
        ).catch(err => {
            console.error(err);
            throw err;
        }).then(conn => {
            console.log('Connection to MongoDB Successful');
            return conn.close();
        }).then(() => {
            console.log('Closing Connection');
            return null;
        });
    },

    createCollection: (dbName, collection) => {
        let dbClient;
        return getDbClient(
            // No Args
        ).then(client => {
            dbClient = client;
            return client.db(dbName || 'Webprogramming');
        }).then(db => {
            return db.createCollection(collection);
        }).then(() => {
            dbClient.close().catch(console.log);
            return null;
        }).catch(err => {
            throw err;
        });
    },

    insertDocuments: (dbName, collection, data) => {
        let dbClient;
        return getDbClient(
            // No Args
        ).then(client => {
            dbClient = client;
            return client.db(dbName || 'Webprogramming');
        }).then(db => {
            return db.collection(collection).insertMany(data);
        }).then(inserted => {
            dbClient.close().catch(console.log);
            return inserted;
        }).catch(err => {
            throw err;
        });
    },

    getDocuments: (dbName, collection) => {
        let dbClient;
        return getDbClient(
            // No Args
        ).then(client => {
            dbClient = client;
            return client.db(dbName || 'Webprogramming');
        }).then(db => {
            return db.collection(collection).find().toArray();
        }).then(items => {
            dbClient.close().catch(console.log);
            return items;
        }).catch(err => {
            throw err;
        });
    },

    updateDocumentById: (dbName, collection, id, data) => {
        let dbClient;
        return getDbClient(
            // No Args
        ).then(client => {
            dbClient = client;
            return client.db(dbName || 'Webprogramming');
        }).then(db => {
            return db.collection(collection).updateOne({
                '_id': id
            }, {
                $set: data
            });
        }).then(items => {
            dbClient.close().catch(console.log);
            return items;
        }).catch(err => {
            throw err;
        });
    }
}
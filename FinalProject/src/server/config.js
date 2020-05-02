const path = require('path');
const properties = require('properties-reader')(path.join(__dirname, './application.properties'));

module.exports = {
    'db.mongo.user': properties.get('db.mongo.user'),
    'db.mongo.secret': properties.get('db.mongo.secret')
}
var mongojs = require('mongojs');

var databaseUrl = 'mongodb://localhost/testDB';
var collections = ['data'];

var connect = mongojs(databaseUrl, collections);

module.exports = {
    connect: connect
};
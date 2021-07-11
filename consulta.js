const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('contatos');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Foram encontrados os seguintes docs:");
        console.log(docs)
        callback(docs);
    });
};
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb+srv://dswa5ifsp:senha@clusterdswa5-x96ld.mongodb.net/test?retryWrites=true&w=majority';
// Database Name
const dbName = 'ifsp';
// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
    assert.equal(null, err);
    console.log("Aluno: Fabio Teixeira");
    console.log("Servidor conectado!");

    const db = client.db(dbName);

    findDocuments(db, function() {
        client.close();
    });

});
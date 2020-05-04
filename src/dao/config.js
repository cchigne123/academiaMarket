const admin = require('firebase-admin');
let serviceAccount = require('../../../firebase-creds.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

module.exports = db;
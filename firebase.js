const admin = require("firebase-admin");

const serviceAccount = require("./firebase_key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

console.log("Initialized firebase_admin");

const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp();
var db = admin.firestore();

exports.subscription = functions.https.onRequest((request, response) => {
  const payload = request.body

  if ("subscription" in payload) {
    const subscription = payload.subscription

    db.collection("subscriptions").doc(subscription.id.toString()).set(subscription)
    .then(function() {
      response.status(200).send()
    })
  }
});

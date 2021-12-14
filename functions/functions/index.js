const functions = require("firebase-functions");
const { firestore } = require("firebase-admin");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.handleSubmit = functions.https.onRequest(async (req, res) => {
  try {
    const body = JSON.parse(req.body);

    const snapshot = await firestore().collection("users").add(body);

    res.send(
      JSON.stringify({
        ok: true,
        statusCode: 200,
        message: "User registered successfully.",
        data: snapshot.data(),
      })
    );
  } catch (e) {
    res.send(
      JSON.stringify({
        ok: false,
        statusCode: 500,
        message: "Internal Server Error",
      })
    );
  }
});

const { User } = require("../model");
const admin = require("firebase-admin");

const processLogin = async (req, res, next) => {
  const idToken = req.headers.authorization
    ? req.headers.authorization.split(" ")[1]
    : "";

  try {
    await admin.auth().verifyIdToken(idToken);
    console.log("ID Token OK");
  } catch (e) {
    console.log("Verification failed", e);
    return res.sendStatus(401);
  }

  if (req.headers.uid) {
    console.log(`user --> ${req.headers.uid}`);
    const user = await User.findOne({
      uid: req.headers.uid,
    });
    req.userId = String(user._id);
  }
  next();
};

module.exports = processLogin;

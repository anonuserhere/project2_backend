const admin = require("firebase-admin");
const { User } = require("../model");

const login = async (data) => {
  const { uid, email, idToken } = data;

  try {
    await admin.auth().verifyIdToken(idToken);
    console.log("Valid login");
  } catch (e) {
    console.error("Error verifying token", e);
    throw e;
  }

  let currentUser = await User.findOne({ uid, email });
  console.log("Current user:", currentUser);

  if (!currentUser) {
    currentUser = new User({ uid, email });
    currentUser.lastLogin = Date.now();
    await currentUser.save();
  }
};

module.exports = {
  login,
};

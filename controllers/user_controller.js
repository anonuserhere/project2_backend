const { login: loginUser } = require("../service/user_service");

const login = async (req, res) => {
  const { email } = req.body;
  const uid = req.headers.uid;
  const idToken = req.headers.authorization
    ? req.headers.authorization.split(" ")[1]
    : "";

  try {
    await loginUser({ uid, email, idToken });
    return res.sendStatus(200);
  } catch (e) {
    console.error("Login failed:", e);
    return res.sendStatus(500);
  }
};

module.exports = {
  login,
};

const express = require("express");
const cors = require("cors");
const { router: EntryRouter } = require("./entry");
const { login } = require("../controllers/user_controller");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", EntryRouter);
app.post("/user/login", login);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const {
  create: createOne,
  list: listOne,
  findById,
  updateOne: updateOneEntry,
  deleteOne: deleteOneEntry,
} = require("../service/entry_service");

const readAll = async (req, res) => {
  try {
    let data = await listOne(req.userId);
    return data.length > 0 ? res.json(data) : res.sendStatus(404);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
};

module.exports = {
  readAll,
};

const { createIndexes } = require("../model/entry_model");
const {
  create: createOne,
  list: listOne,
  findById,
  updateOne: updateOneEntry,
  deleteOne: deleteOneEntry,
} = require("../service/entry_service");

const readAll = async (req, res) => {
  try {
    let data = await listOne();
    return data.length > 0 ? res.json(data) : res.sendStatus(404);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
};

const create = async (req, res) => {
  try {
    if (req.userId) {
      req.body.user = req.userId;
    }
    await createOne(req.body);
    return res.sendStatus(201);
  } catch (e) {
    console.log("Failed to create entry", e);
    return res.sendStatus(500);
  }
};

const getOne = async (req, res) => {
  console.log(`Checking --> ${req.params.id}`);
  try {
    const entry = await findById(req.params.id);
    if (entry) {
      return res.json(entry);
    } else {
      return res.sendStatus(404);
    }
  } catch (e) {
    console.log("Failed to find entry:", e);
    return res.sendStatus(404);
  }
};

const updateOne = async (req, res) => {
  const condition = {
    _id: req.params.id,
  };
  const data = req.body;
  try {
    const matched = await updateOneEntry(condition, data);
    if (matched.matchedCount === 0) {
      return res.sendStatus(404);
    } else if (matched.modifiedCount === 0) {
      return res.sendStatus(204);
    } else {
      return res.json(matched);
    }
  } catch (e) {
    console.log("Failed to update:", e);
    return res.sendStatus(500);
  }
};

const deleteOne = async (req, res) => {
  try {
    const deletedPost = await deleteOneEntry(req.params.id);
    return deletedPost === 0 ? res.sendStatus(404) : res.sendStatus(204);
  } catch (e) {
    console.log("Unable to process deletion:", e);
    return res.sendStatus(500);
  }
};

module.exports = {
  readAll,
  create,
  getOne,
  deleteOne,
  updateOne,
};

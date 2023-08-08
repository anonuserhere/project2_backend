const { Entry } = require("../model");

const create = async (data) => {
  try {
    const created = await Entry.create(data);
    return created;
  } catch (e) {
    throw e;
  }
};

const list = async (data) => {
  try {
    return await Entry.find(data) || [];
  } catch (e) {
    throw e;
  }
};

const findById = async (id) => {
  try {
    return await Entry.findById(id);
  } catch (e) {
    throw e;
  }
};

const updateOne = async (condition, data) => {
  try {
    return await Entry.updateOne(condition, data);
  } catch (e) {
    throw e;
  }
};

const deleteOne = async (id) => {
  try {
    const entry = await Entry.findById(id);
    if (!entry) {
      return false;
    }
    await Entry.deleteOne();
    return true;
  } catch (e) {
    throw e;
  }
};

module.exports = {
  create,
  updateOne,
  findById,
  deleteOne,
  list,
};

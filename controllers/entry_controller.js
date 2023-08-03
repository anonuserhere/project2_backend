const readAll = async (db, req, res) => {
  try {
    const collection = "images";
    let response = await db.collection(collection).find().toArray();
    response.length > 0 ? res.json(response) : res.sendStatus(404);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

module.exports = {
  readAll,
};

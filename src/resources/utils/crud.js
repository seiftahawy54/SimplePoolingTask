const getMany = model => async (req, res) => {
  res.send();
};

const getOne = model => async (req, res) => {
  res.send("you've got one item");
};

const createOne = model => async (req, res) => {
  res.send("you've added one item");
};

const removeOne = model => async (req, res) => {
  res.send("you've deleted one");
};

const updateOne = model => async (req, res) => {
  res.send("you've updated one");
};

module.exports = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model),
});

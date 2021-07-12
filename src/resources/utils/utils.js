const db = require("./db");

const runQueryAll = async query => {
  let result = await db.all(query);

  if (result) return result;
  else throw "Error in selection many";
};

const runQueryEach = async query => {
  let result = await db.each(query);
  if (result) return result;
  else throw "Error in selection one";
};

const runQueryGet = async query => {
  let result = await db.get(query);
  if (result) return result;
  else throw "Error in selection one";
};

const runQueryCreate = async query => {
  let result = await db.exec(query);
  if (result) return result;
  else throw "Error in executed query";
};

const queryRunner = async query => {
  let result = await db.run(query);
  if (result) return result;
  else throw "Error in query runner";
};

module.exports = {
  runQueryAll,
  runQueryEach,
  runQueryGet,
  runQueryCreate,
  queryRunner,
};

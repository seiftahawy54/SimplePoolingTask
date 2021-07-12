const db = require("../utils/db");
const utils = require("../utils/utils");

const getMany = async () => {
  const query = "SELECT * FROM users;";

  await utils.runQueryAll(query);
};

getMany();

const getOne = async (id, column) => {
  const query = `SELECT ${column} FROM users WHERE id = ${id};`;

  return await utils.runQueryEach(query);
};

const createOne = async (name, email, password, gender, hascar) => {
  const query = `INSERT INTO users (username, email, password, gender, hasacar) VALUES ("${name}", "${email}", "${password}", "${gender}", ${hascar});`;

  return await utils.runQueryAll(query);
};

const updateOne = async (id, name, email, password, hascar) => {
  const query = `UPDATE users SET (name = ${name}, email = ${email}, password = ${password}, hascar = ${hascar}) WHERE id = ${id};`;
  return await utils.runQueryAll(query);
};

const deleteOne = async id => {
  const query = `DELETE FROM users WHERE id = ${id};`;
  return await utils.runQueryAll(query);
};

module.exports = {
  getMany,
  getOne,
  createOne,
  updateOne,
  deleteOne,
};

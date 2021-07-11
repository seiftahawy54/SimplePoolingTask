const db = require("../utils/db");
const utils = require("../utils/utils");

const selectAllUsers = () => {
  const query = "SELECT * FROM users;";
  console.table(utils.runQueryAll(query));
};

selectAllUsers();

const getOneUser = (id, column) => {
  const query = `SELECT ${column} FROM users WHERE id = ${id};`;
  utils.queryRunner(query);
};

const createUser = (name, email, password, gender, hascar) => {
  const query = `INSERT INTO users (username, email, password, gender, hasacar) VALUES ("${name}", "${email}", "${password}", "${gender}", ${hascar});`;
  utils.queryRunner(query);
};

// createUser("Seif", "Seiff", 123456, "male", true);

const updateUser = (id, name, email, password, hascar) => {
  const query = `UPDATE users SET (name = ${name}, email = ${email}, password = ${password}, hascar = ${hascar}) WHERE id = ${id};`;
  utils.queryRunner(query);
};

const deleteUser = id => {
  const query = `DELETE FROM users WHERE id = ${id};`;
  utils.queryRunner(query);
};

module.exports = {
  selectAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};

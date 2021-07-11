const Users = require("./user.model");
const controllers = require("../utils/crud");

module.exports = controllers(Users);

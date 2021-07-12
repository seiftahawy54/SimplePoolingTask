// const db = require("../utils/db");
const utils = require("../utils/utils");

const getMany = async () => {
  const query = "SELECT * FROM trips;";
  return await utils.runQueryAll(query);
};

const getOne = async (tripId, column) =>
  `SELECT ${column} FROM trips WHERE id = ${id}`;

const updateOne = async (
  tripId,
  userId,
  sLongitude,
  eLongitude,
  sTime,
  count
) =>
  `UPDATE trips SET (sLongitude = ${sLongitude}, eLongitude = ${eLongitude}, sTime = ${sTime}, count = ${count}) WHERE tripId = ${tripId} AND userId = ${userId};`;

// updateOne(5, 9, 123, 456, 900, 1);

const createOne = async (userId, sLongitude, eLongitude, sTime, count) => {
  const query = `INSERT INTO trips (${userId}, ${sLongitude}, ${eLongitude}, ${sTime}, ${count});`;

  db.run(query, (res, err) => {
    if (err) return console.error(err.message);
    else return console.log(res);
  });
};

const deleteOne = async (tripId, userId) =>
  `DELETE FROM trips WHERE tripId = ${tripId} AND ${userId}`;

module.exports = {
  getMany,
  getOne,
  updateOne,
  createOne,
  deleteOne,
};

const db = require("../utils/db");
// const queries = require("../utils/utils");

const selectAllTripes = () => {
  const query = "SELECT * FROM trips;";
  db.run(query, (res, err) => {
    if (err) return console.error(err);
    return console.log(data);
  });
};

// selectAllTripes();

const getOneTrip = (tripId, column) =>
  `SELECT ${column} FROM trips WHERE id = ${id}`;

const updateTrip = (tripId, userId, sLongitude, eLongitude, sTime, count) =>
  `UPDATE trips SET (sLongitude = ${sLongitude}, eLongitude = ${eLongitude}, sTime = ${sTime}, count = ${count}) WHERE tripId = ${tripId} AND userId = ${userId};`;

// updateTrip(5, 9, 123, 456, 900, 1);

const createTrip = (userId, sLongitude, eLongitude, sTime, count) => {
  const query = `INSERT INTO trips (${userId}, ${sLongitude}, ${eLongitude}, ${sTime}, ${count});`;

  db.run(query, (res, err) => {
    if (err) return console.error(err.message);
    else return console.log(res);
  });
};

const deleteTrip = (tripId, userId) =>
  `DELETE FROM trips WHERE tripId = ${tripId} AND ${userId}`;

module.exports = {
  selectAllTripes,
  getOneTrip,
  updateTrip,
  createTrip,
  deleteTrip,
};

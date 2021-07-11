const selectAllTripes = () => "SELECT * FROM tripes;";

const getOneTrip = (tripId, column) =>
  `SELECT ${column} FROM tripes WHERE id = ${id}`;

const updateTrip = (tripId, userId, sLongitude, eLongitude, sTime, count) =>
  `UPDATE tripes SET (sLongitude = ${sLongitude}, eLongitude = ${eLongitude}, sTime = ${sTime}, count = ${count}) WHERE tripId = ${tripId} AND userId = ${userId};`;

const createTrip = (userId, sLongitude, eLongitude, sTime, count) =>
  `INSERT INTO tripes (${userId}, ${sLongitude}, ${eLongitude}, ${sTime}, ${count});`;

const deleteTrip = (tripId, userId) =>
  `DELETE FROM tripes WHERE tripId = ${tripId} AND ${userId}`;

module.exports = {
  selectAllTripes,
  getOneTrip,
  updateTrip,
  createTrip,
  deleteTrip,
};

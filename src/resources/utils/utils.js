const db = require("./db");

const runQueryAll = sqlQuery => {
  db.all(sqlQuery, (err, rows) => {
    if (err) {
      console.log(err.message);
    } else {
      return rows;
    }
  });
};

const runQueryEach = sqlQuery => {
  db.each(sqlQuery, (err, row) => {
    if (err) {
      console.log(err.message);
    } else {
      return rows;
    }
  });
};

const runQueryGet = sqlQuery => {
  db.get(sqlQuery, (err, row) => {
    if (err) {
      console.log(err.message);
    } else {
      return rows;
    }
  });
};

module.exports = {
  runQueryAll,
  runQueryEach,
  runQueryGet,
};

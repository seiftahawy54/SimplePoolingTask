const db = require("./db");

const runQueryAll = query => {
  db.all(query, [], (err, rows) => {
    if (err) {
      throw err;
    }

    rows.forEach(row => {
      return row;
    });
  });
};

/*
const runQueryEach = sqlQuery => {
  db.each(sqlQuery, (rows, err) => {
    if (err) {
      console.log(err.message);
    } else {
      return rows;
    }
  });
};
*/
/*
const runQueryGet = sqlQuery => {
  db.get(sqlQuery, (err, row) => {
    if (err) {
      console.log(err.message);
    } else {
      return rows;
    }
  });
};

const runQueryCreate = sqlQuery => {
  db.run(sqlQuery, (err, row) => {
    if (err) {
      console.log(err.message);
    } else {
      return true;
    }
  });
};
*/

const queryRunner = query => {
  db.run(query, (err, res) => {
    if (err) return console.error(err.message);
    else return console.log(res);
  });
};

module.exports = {
  runQueryAll,
  // runQueryEach,
  // runQueryGet,
  // runQueryCreate,
  queryRunner,
};

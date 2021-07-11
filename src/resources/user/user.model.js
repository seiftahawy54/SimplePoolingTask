const selectAllUsers = () => "SELECT * FROM users;";
const getOneUser = (id, column) =>
  `SELECT ${column} FROM users WHERE id = ${id};`;

const createUser = (name, email, password, gender, hascar) =>
  `INSERT INTO users (${name}, ${email}, ${password}, ${gender}, ${hascar});`;

const updateUser = (id, name, email, password, hascar) =>
  `UPDATE users SET (name = ${name}, email = ${email}, password = ${password}, hascar = ${hascar}) WHERE id = ${id};`;

const deleteUser = id => `DELETE FROM users WHERE id = ${id};`;

module.exports = {
  selectAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};

/*
create table users(id INTEGER primary key autoincrement, userName varchar(50) not null,
email varchar(50) not null unique, password varchar(50) not null, gender varchar(50) not null, hasAcar boolean not null )

create table trips(tripID INTEGER primary key autoincrement, userID INTEGER, startLongitude real not null, endLongitude real not null,
startLatitude real not null, endLatitude real not null, startTime integer not null, count integer not null, constraint fk_users foreign key (userID) references users(id))

*/

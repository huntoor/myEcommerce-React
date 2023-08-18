const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: "hunter",
  password: "password",
  database: "myecommerce"
  // user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_NAME
  // process.env.() is for security reasons
});

db.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + db.threadId);
});

// export default db;
module.exports = db;

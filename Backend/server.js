const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "eventup",
});

app.get("/user", (req, res) => {
  console.log("tbl user");

  const tblUsers_Query = "SELECT * FROM tbl_users";
  console.log(db);
  console.log(tblUsers_Query);
  db.query(tblUsers_Query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });

  //   db.connect(function (err) {
  //     if (err) throw err;
  //     console.log("Connected!", db);

  //   });

  //   const tblUsers_Query = "SELECT * FROM tbl_users";
  //   console.log(tblUsers_Query);
  //   console.log(db);
  //   db.query(sql, (err, data) => {
  //     if (err) return res.json(err);
  //     return res.json(data);
  //   });
});

app.listen(8081, () => {
  console.log("listening");
});

// // Import required modules
// const express = require("express");
// const mysql = require("mysql");

// // Create an Express.js application
// const app = express();
// const port = 3000;

// // Create MySQL connection pool
// const pool = mysql.createPool({
//   connectionLimit: 10,
//   host: "localhost",
//   user: "root",
//   password: "root", // Replace with your MySQL password
//   database: "eventup", // Replace with your MySQL database name
// });

// // Define a route to fetch data from MySQL database
// app.get("/users", (req, res) => {
//   // Get a connection from the pool
//   pool.getConnection((err, connection) => {
//     if (err) {
//       console.error("Error connecting to MySQL:", err);
//       return res.status(500).json({ error: "Internal server error" });
//     }

//     // Use the connection to execute a query
//     connection.query("SELECT * FROM tbl_users", (err, results) => {
//       // Release the connection back to the pool
//       connection.release();

//       if (err) {
//         console.error("Error executing MySQL query:", err);
//         return res.status(500).json({ error: "Internal server error" });
//       }

//       // Return the results as JSON
//       res.json(results);
//     });
//   });
// });

// // Start the Express.js server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

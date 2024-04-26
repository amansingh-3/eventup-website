const express = require("express");
const { json } = require("express");
const { createConnection } = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "eventup",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.post("/contactus", (req, res) => {
  console.log("Inside Link");
  const { email, fname, lname, phone, State, textarea } = req.body;

  if (!email || !fname || !lname || !phone) {
    console.error("Error: Missing required fields");
    res.status(400).send("Missing required fields");
    return;
  }

  const sql =
    "INSERT INTO `tbl_users`( `First Name`, `Last Name`, `emailaddress`, `Phone`, `State`, `Query`)VALUES (?, ?, ?, ?, ?, ? )";
  const values = [fname, lname, email, phone, State, textarea];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).send("Error inserting data");
      return;
    }
    console.log("Data inserted:", result);
    res.status(200).send("Data inserted");
  });
});

app.listen(3000, () => {
  console.log("listening");
});

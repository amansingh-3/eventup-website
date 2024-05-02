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
    "INSERT INTO `tbl_contacts`( `First Name`, `Last Name`, `emailaddress`, `Phone`, `State`, `Query`)VALUES (?, ?, ?, ?, ?, ? )";
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

app.post("/signup", (req, res) => {
  console.log("Inside  SignUP Link");
  const { fname, lname, email, current_password } = req.body;

  //Constraints to Check before Insertion
  if (!email || !fname || !lname || !current_password) {
    console.error("Error: Missing required fields");
    res.status(400).send("Missing required fields");
    return;
  }

  const checkEmailExists = (email, callback) => {
    console.log("Inside Email Query");
    const query = "SELECT * FROM `tbl_users` WHERE emailaddress = ?";
    db.query(query, [email], (error, results) => {
      if (error) {
        callback(error, null);
        return;
      }
      // If results contain any rows, email exists
      const emailExists = results.length > 0;
      callback(null, emailExists);
    });
  };

  const emailToCheck = email;
  checkEmailExists(emailToCheck, (error, emailExists) => {
    if (error) {
      console.error("Error checking email existence:", error);
      return;
    }
    if (emailExists) {
      console.log("Email already exists in the database");

      res.status(400).json({ message: "Email already exists" });
      return;
    } else {
      console.log("Email does not exist in the database");
      //SignUp Process
      const sql =
        "INSERT INTO `tbl_users`( `First Name`, `Last Name`, `emailaddress`, `Password`)VALUES ( ?, ?, ?, ?)";
      const values = [fname, lname, email, current_password];

      db.query(sql, values, (err, result) => {
        if (err) {
          console.error("Error inserting data:", err);
          res.status(500).send("Error inserting data");
          return;
        }
        console.log("Data inserted:", result);
        res.status(200).send("Data inserted");
      });
    }
  });
});

app.post("/login", (req, res) => {
  console.log("Entered Login Req");

  const { email, current_password } = req.body;
  const query = "SELECT * FROM tbl_users WHERE emailaddress = ?";

  db.query(query, [email], (err, result) => {
    if (err) {
      console.error("Error Logging IN:", err);
      res.status(500).send("Login Error Faced");
      return;
    }
    if (result.length === 0) {
      res
        .status(401)
        .json({ message: "Invalid credentials ! Email not found" });
      return;
    }
    const user = result[0];
    console.log(result[0]);
    if (user.Password !== current_password) {
      res.status(401).json({
        message: "Invalid credentials! Password incorrect",
      });
      return;
    }

    res
      .status(200)
      .json({
        message: "Login successful",
        firstName: user["First Name"],
        lastName: user["Last Name"],
      });
  });
});
app.listen(3000, () => {
  console.log("listening");
});

import express from "express";
import { createConnection } from "mysql";
import cors from "cors";

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

        if (result.affectedRows === 1) {
          const insertedRowId = result.insertId; // Get the ID of the inserted row

          // Fetch the inserted row by its ID
          const fetchInsertedRowQuery =
            "SELECT * FROM `tbl_users` WHERE ID = ?";
          db.query(
            fetchInsertedRowQuery,
            [insertedRowId],
            (fetchErr, fetchResult) => {
              if (fetchErr) {
                console.error("Error fetching inserted row:", fetchErr);
                res.status(500).send("Error fetching inserted row");
                return;
              }

              // Extract the inserted row data
              const insertedRow = fetchResult[0];
              console.log("Data inserted:", insertedRow);

              // Send the inserted row data back to the client
              res.status(200).json({
                message: "Data inserted",
                firstName: insertedRow["First Name"],
                lastName: insertedRow["Last Name"],
                id: insertedRow["ID"],
              });
            }
          );
        } else {
          // No rows affected by the insertion
          console.error("No rows affected by the insertion");
          res.status(500).send("No rows affected by the insertion");
        }
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

    res.status(200).json({
      message: "Login successful",
      firstName: user["First Name"],
      lastName: user["Last Name"],
      id: user["ID"],
    });
  });
});

app.get("/getEvents", (req, res) => {
  console.log("Entered Get Events Req");

  const query = "SELECT * FROM`tbl_events`";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Error Getting Events:", err);
      res.status(500).send("Events couldn't load ");
      return;
    }
    if (result && result.length > 0) {
      res.status(200).json(result);
      // console.log(result, "result");
    } else {
      res.status(200).json({ message: " No Events Data Found" }); // Sending an empty array as there are no e
    }
  });
});

app.post("/register-event", (req, res) => {
  const { eventId, userID } = req.body;
  console.log(req.body);

  const sql =
    "INSERT INTO `tbl_userevents`( `user_id`, `event_id`) VALUES (?,?)";
  db.query(sql, [userID, eventId], (err, result) => {
    if (err) {
      console.error("Error registering for event:", err);
      return res.status(500).json({ error: "Error registering for event" });
    }
    return res
      .status(200)
      .json({ message: "Successfully registered for event" });
  });
});

app.post("/getUserEvents", (req, res) => {
  console.log("Entered Get  UsersEvents ");

  const { userId } = req.body;
  console.log(userId, "user id back");
  // const query = "SELECT * FROM `tbl_userevents` WHERE `user_id` = ?";
  const query = `
  SELECT events.* 
   FROM tbl_userevents AS user_events
   INNER JOIN tbl_events AS events ON user_events.event_id = events.id
   WHERE user_events.user_id = ?`;

  db.query(query, [userId], (err, result) => {
    if (err) {
      console.error("Error Getting Users Events:", err);
      res.status(500).send("Events couldn't load ");
      return;
    }
    if (result && result.length > 0) {
      res.status(200).json(result);
      console.log(result, "result");
    } else {
      res.status(200).json({ message: " No Events Data Found" }); // Sending an empty array as there are
    }
  });
});

app.listen(3000, () => {
  console.log("listening");
});

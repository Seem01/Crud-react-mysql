const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { response } = require("express");
const saltRound = 10;

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(cors({origin: "http://localhost:3000",
methods: "*",
credentials: true,}));
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "customerSystem",
});


//LOGIN Manage Database
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "mysecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expire: 60 * 60 * 24,
    },
  })
);

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRound, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO users (username, password) VALUES (?,?)",
      [username, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "select * from users where username = ? ",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong username or password" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});








//CRUD manage database
app.get("/customers", (req, res) => {
  db.query("SELECT * FROM customers", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/create", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const address = req.body.address;
  const telephone = req.body.telephone;
  const statuscus = req.body.statuscus;

  db.query(
    "INSERT INTO customers (firstname, lastname, address, telephone, statuscus) VALUE (?,?,?,?,?)",
    [firstname, lastname, address, telephone, statuscus]
  ),
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Value inserted");
      }
    };
});

app.put('/update', (req,res) => {
    const id = req.body.id;
    const statuscus = req.body.statuscus;
    db.query("UPDATE customers SET statuscus = ? WHERE id = ?",[statuscus, id], (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})

app.delete('/delete/:id', (req,res) => {
  const id = req.params.id;
  db.query("DELETE FROM customers WHERE id = ?", id, (err, result) => {
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  })
})


app.listen("3001", () => {
  console.log("Server Is running");
});

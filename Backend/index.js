const express = require("express");
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser  = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false }));

let databse = [
  {
    name: "Admin",
    password: "Admin",
  },
];

app.use("/login", (req, res) => {
  let username = "";
  if (req.body.username) username = req.body.username;
  let password = "";
  if (req.body.password) password = req.body.password;
  let isPresent = false;
  let isPresnetIndex = null;
  for (let i = 0; i < databse.length; i++) {
    if (databse[i].name === username && databse[i].password === password) {
      isPresent = true;
      isPresnetIndex = i;
      break;
    }
  }
  console.log(isPresent);
  if (isPresent) {
    // If credentials are correct set and return a token "test123"
    // note in a production level app this could be jwt or could use other strategies
    res.json({ token: "test123" });
  } else {
    // If isPresent is false return an error
    res.json({ error: "error message" });
  }
});

const router = require('./routes/routes');
app.use('/', router);

app.listen(3001, () => {
  console.log("Server started on port 3001. Ctrl^c to quit.");
});

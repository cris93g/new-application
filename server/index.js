//brings enviroment file
require("dotenv").config();

//brings all librarys
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const session = require("express-session");
routes = require("./routes/routes");

//create server with express
const app = express();

//creates port for server
const port = process.env.port || 3001;

// brings cors so outside endpoints dont hit the application
app.use(cors());

//body parses data to use json
app.use(json());

//allows us to use our db
massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

//starts to use session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

//brings routes
routes(app);

//listening to our server
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

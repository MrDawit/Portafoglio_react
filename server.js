
require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();



var corsOptions = {
  origin: "http://localhost:8081"
};
//COMMENT FOR THE SAKE OF COMMENT
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// ADDED API ROUTE

require("./app.js")(app);

//CONFIGURE FOR HEROKU DEPLOYMENT

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static('CLIENT/build'));
// Handle React routing, return all requests to React app
  app.get('/', function(req, res) {
    res.sendFile('CLIENT/build', 'index.html');
  });
}


// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
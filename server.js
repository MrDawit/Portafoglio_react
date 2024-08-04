
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 8080;

//conditional for child_process working under cross platform conditions
const start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');

 const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


require("./routes/api-routes.js")(app);

//CONFIGURE FOR HEROKU DEPLOYMENT

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static('client/build'));
// Handle React routing, return all requests to React app
  app.get('/', function(req, res) {
    res.sendFile('client/build', 'index.html');
  });
  
  
  //listen for requests
  app.listen(PORT, () => {

    if (process.env.NODE_ENV_PRODUCTION_TEST === 'true') {
        //opens up localhost address on browser
        require('child_process').exec(`${start} http://localhost:${PORT}/`);
        console.log(`Server is running on port ${PORT} in production mode.`);
    }else {
          //opens up production address on browser 
          require('child_process').exec(`${start} https://portafoglioreact.onrender.com/`);
          console.log(`Server is running on port ${PORT} in production address.`);
          console.log(`PRODUCTION TEST (env variable) = ${process.env.NODE_ENV_PRODUCTION_TESTING || 'NONE'} `)
    }    
  });
}else{
//listen for requests in development mode
app.listen(PORT, () =>{ 
  console.info(`server has started on ${PORT} in development mode`);

});
};
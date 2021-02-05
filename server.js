
// require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");

 const app = express();

// const nodemailer = require('nodemailer');

// const path = require('path');


// var corsOptions = {
//   origin: "http://localhost:8081"
// };
// //COMMENT FOR THE SAKE OF COMMENT
// app.use(cors(corsOptions));
// parse requests of content-type - application/json

app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// app.use(express.static("public"));
// ADDED API ROUTE

// require("./routes/api-routes.js")(app);

//CONFIGURE FOR HEROKU DEPLOYMENT

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static('client/build'));
// Handle React routing, return all requests to React app
  app.get('/', function(req, res) {
    res.sendFile('client/build', 'index.html');
  });
}

// // Static folder
// app.use('/client/public', express.static(path.join(__dirname, 'public')));




// var corsOptions = {
//   origin: "http://localhost:8081"
// };
// app.use(cors(corsOptions));

// app.get('/products/:id', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })

app.post("/api/contact", function (req, res) {
  console.log("tester: "+req.body);
  // console.log(req.body);



// async function main() {
//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//       // service: 'Gmail',
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true, // true for 465, false for other ports
//     auth: {
//       user: "recipe.tracker.app@gmail.com",
//       pass: "EricLuis",
//     },
//     tls: {
//       // do not fail on invalid certs
//       rejectUnauthorized: false
//     }
//   });
//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: `'Recipe Track App' <recipe.tracker.app@gmail.com>`, // sender address
//     to: `'Contacts' <recipe.tracker.app@gmail.com>`, // list of receivers,MUST BE VALID email
//     subject: "test", // Subject line
//     text: "testing 1,2,3", // plain text body
//       html: "just a test",
//   //   html: `<p>Contact Name: <b>${req.body.name}</b></p></br>
//   //         <p>Contact Info: <b>${req.body.contactInfo}</b></p></br>
//   //         <p>Category: ${req.body.category}</p></br>
//   //         <p>Message: ${req.body.content}</p>`, // html body
//   });
//   console.log("Message sent: %s", info.messageId);
// }
// main().catch(console.error);
});

// var router = express.Router();
// app.post('/', (req, res) => {
//   res.sendFile('./public/index.html');
// });


// app.use(express.static('public'));

console.log("does this work?");
// // serve PORT running here
const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.info(`server has started on ${PORT}`))


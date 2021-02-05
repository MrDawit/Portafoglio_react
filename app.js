// let express = require('express');
// var router = express.Router();
// let app = express();
// let nodemailer = require('nodemailer');

// const path = require('path');

// module.exports = function (app) {

// // Static folder
// app.use('client/public', express.static(path.join(__dirname, 'public')));

// nodemailer.createTransport({
//   host: "smtp.gmail.com", 
//     port: 465,
//     secure: true,
//   auth: {
//     user: "recipe.tracker.app@gmail.com",
//     pass: "EricLuis" 
//   }
// });

// // verifying the connection configuration
// // transporter.verify(function(error, success) {
// //     if (error) {
// //       console.log(error);
// //     } else {
// //       console.log("Server is ready to take our messages!");
// //     }
// // });


//     router.post('/access', (req, res, next) => {
//         var email = req.body.email
//         var message = req.body.message
//         var content = `email: ${email} \n message: ${message} `
      
//         var mail = {
//           from: "recipe.tracker.app@gmail.com", 
//           to: "recipe.tracker.app@gmail.com", 
//           message: "U will work",
//           text: "Thou commands"
//         }
      
//         transporter.sendMail(mail, (err, res) => {
//           if (err) {
//               //console.log(data);
//             res.json({
//               status: 'fail'
//             })
//           } else {
//               //console.log(data);
//             res.json({
//              status: 'success'
//             })
//           }
//         })
//       })
      

// // serve PORT running here
// const PORT = process.env.PORT || 8080
// app.listen(PORT, () => console.info(`server has started on ${PORT}`))



// };
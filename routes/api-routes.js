// const express = require('express');
// const app = express();
// const nodemailer = require("nodemailer");

module.exports = function (app) {

// app.post("/api/contact", function (req, res) {

//     console.log(req.body);
// async function main() {
//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//         // service: 'Gmail',
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true, // true for 465, false for other ports
//       auth: {
//         user: "recipe.tracker.app@gmail.com",
//         pass: "EricLuis",
//       },
//       tls: {
//         // do not fail on invalid certs
//         rejectUnauthorized: false
//       }
//     });
//     // send mail with defined transport object
//     let info = await transporter.sendMail({
//       from: `'Recipe Track App' <"Shalom">`, // sender address
//       to: `'Contacts' <of course>`, // list of receivers
//       subject: "test", // Subject line
//       text: "testing 1,2,3", // plain text body
//         html: "just a test",
//     //   html: `<p>Contact Name: <b>${req.body.name}</b></p></br>
//     //         <p>Contact Info: <b>${req.body.contactInfo}</b></p></br>
//     //         <p>Category: ${req.body.category}</p></br>
//     //         <p>Message: ${req.body.content}</p>`, // html body
//     });
//     console.log("Message sent: %s", info.messageId);
//   }
//   main().catch(console.error);
// });

};
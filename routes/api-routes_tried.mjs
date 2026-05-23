require("dotenv").config();
//const { gmail } = require("googleapis/build/src/apis/gmail");
//const nodemailer = require("nodemailer");
//const { google } = require("googleapis");
//const Mail = require("nodemailer/lib/mailer");
import * as Brevo from '@getbrevo/brevo'
//import * as Brevo from 'brevo-node';
//const Brevo =require('brevo-node');
//const Brevo = require('@getbrevo/brevo');

// module.exports = function (app) {
// // import * as Brevo from 'brevo-node';

//   app.post("/api/contact", function (req, response) {
//     console.log("Request Object: " + JSON.stringify(req.body));
  
//     async function main() {
//      // let testAccount = await nodemailer.createTestAccount();
//       // let oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI);
//       // oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

//       // let accessToken = await oAuth2Client.getAccessToken();

//       // create reusable transporter object using the default SMTP transport
//       let transporter = nodemailer.createTransport({
//         //works with or without name key
//         //name: "www.mail.zoho.com",
//       //  host: "smtp.zoho.com",
//        host:"smtp-relay.brevo.com",
//         port: 587,
//         // secure: true, // true for 465, false for other ports
//           // port:587,
//           secure:false,
// connectionTimeout: 10000, // 10 seconds
//   greetingTimeout: 10000,
//   socketTimeout: 10000,
//  requireTLS: false,        // Forces TLS encryption
//         auth: {
//           // user: process.env.USER,  //zoho email
//           // pass: process.env.THIRD_PARTY_APP_PASS,   //zoho email
//           // type: 'OAuth2',
//           // user: process.env.MAIL_USER,
//           // clientId: process.env.CLIENT_ID,
//           // clientSecret: process.env.CLIENT_SECRET,
//           // refreshToken: process.env.REFRESH_TOKEN,
//           // accessToken: accessToken
//         },
//         //works with or without
//         // tls: {
//         //   // do not fail on invalid certs(false), changed to true for security and still worked
//         //   rejectUnauthorized: true
//         // }

//         // requireTLS: true        // Forces TLS encryption
//       });
//       // send mail with defined transport object
//       let info = await transporter.sendMail({
//         from: `'Portafoglio App' <${process.env.USER}>`, // sender address
//          to: `'Contacts' <${process.env.USER}>`, // list of receivers,MUST BE VALID email
//             // from: `'Portafoglio App' <newdigitalworld.shalomdawit@gmail.com>`, // sender address
//         // to: `'Contacts' <newdigitalworld.shalomdawit@gmail.com>`, // list of receivers,MUST BE VALID email
//         subject: `${req.body.subject}`, // Subject line
//         text: `${req.body.message}`, // plain text body
//         // html: "just a test",
//         html: `<p>Contact Name: <b>${req.body.name}</b></p></br>
//                 <p>Contact Info: <b>${req.body.contactWay}</b></p></br>
//                 <p>Subject: ${req.body.subject}</p></br>
//                 <p>Message: ${req.body.message}</p>`, // html body
//         // dsn: {
//         //     return: 'headers',
//          //  notify: ['success','failure','delay']
//         //     recipient: `${process.env.MAIL_USER}`
//         // }
//       }, function (err, res) {
//         if (err) {
//           //Object being sent back on UNSUCCESSFUL completion of email being sent
//           // response.json({
//           //   status: "Error Code is shown on server console"
//           // })
//           console.log(`Error Code: ${err.code}`);
//           //res.status(500).json({ error: err.message })
//         } else {
//          // console.log(`Message sent: ${res.messageId}`);
//           //Object being sent back on SUCCESSFUL completion of email being sent
//           response.json({
//             status: 'SENT'
//           });
//           // const resReturned = res.message;
//           // response.json({
//           //     res_m: 'SENT'
//           // });
//           // console.log(response.json(res.message));
//         };
//         transporter.close();

//       });
//       //  console.log("Message sent: %s", info.messageId);
// console.log("Message sent?");


//     };
//      main().catch(console.error);
//    // res.status(500).json({ error: err.message })
//   });

// };



const apiInstance = new Brevo.TransactionalEmailsApi();
apiInstance.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, 'YOUR API KEY');

module.exports = async function handler(req, res){

// export default async function handler(req, res) {
  const sendSmtpEmail = new Brevo.SendSmtpEmail();

  sendSmtpEmail.subject = "Hello from React!";
  sendSmtpEmail.htmlContent = "<html><body><h1>This is a test email</h1></body></html>";
  sendSmtpEmail.sender = { "name": "Your Name", "email": "SENDER EMAIL" };
  sendSmtpEmail.to = [{ "email": "RECIPIENT EMAIL", "name": "Recipient Name" }];

  try {
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// };
//  main().catch(console.error);
// //    // res.status(500).json({ error: err.message })
//   });

//   };
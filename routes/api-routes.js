require("dotenv").config();
const nodemailer = require("nodemailer");

module.exports = function (app) {

    app.post("/api/contact", function (req, res) {
        console.log("Request Object: "+JSON.stringify(req.body));
        // console.log(req.body);
      
      // res.send(console.log("u da best!"));
      
      async function main() {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            // service: 'Gmail',
          host: "smtp.gmail.com",
          port: 465,
          secure: true, // true for 465, false for other ports
          auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
          },
          tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
          }
        });
        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: `'Recipe Track App' <${req.body.email}>`, // sender address
          to: `'Contacts' <${process.env.MAIL_USER}>`, // list of receivers,MUST BE VALID email
          subject: `${req.body.subject}`, // Subject line
          text: `${req.body.message}`, // plain text body
            // html: "just a test",
          html: `<p>Contact Name: <b>${req.body.name}</b></p></br>
                <p>Contact Info: <b>${req.body.email}</b></p></br>
                <p>Subject: ${req.body.subject}</p></br>
                <p>Message: ${req.body.message}</p>`, // html body
        });
        console.log("Message sent: %s", info.messageId);
      }
      main().catch(console.error);
      });

};
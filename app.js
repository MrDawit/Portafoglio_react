let express = require('express');
let app = express();
let nodemailer = require('nodemailer');

const path = require('path');

module.exports = function (app) {

// Static folder
app.use('/CLIENT/public', express.static(path.join(__dirname, 'public')));

nodemailer.createTransport({
  host: "smtp.gmail.com", 
    port: 587,
    secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD 
  }
});

// verifying the connection configuration
transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages!");
    }
});


    router.post('/access', (req, res, next) => {
        var email = req.body.email
        var message = req.body.message
        var content = `email: ${email} \n message: ${message} `
      
        var mail = {
          from: email, 
          to: "recipe.tracker.app@gmail.com", 
          message: subject,
          text: content
        }
      
        transporter.sendMail(mail, (err, data) => {
          if (err) {
            res.json({
              status: 'fail'
            })
          } else {
            res.json({
             status: 'success'
            })
          }
        })
      })
      

// serve PORT running here
const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.info(`server has started on ${PORT}`))



};
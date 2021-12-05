const nodemailer = require('nodemailer');
const nodemailerTransport = require('nodemailer-mailgun-transport');
const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');
const creds = require('./config');
const port = 3002;

const nodemailerMailgun = nodemailer.createTransport(nodemailerTransport({
  auth: {
    api_key: creds.API_KEY,
    domain: creds.DOMAIN,
  }
}));

router.post('/contact', (req, res, next) => {
  console.log(req.body);
  let name = req.body.name;
  let email = req.body.email;
  let msg = req.body.msg;

  let mail = {
    from: email,
    to: creds.EMAIL_TO,
    subject: `New message from ${name} [Contact Form]`,
    text: msg,
    html: `<p>${msg}</p>`
  };

  nodemailerMailgun.sendMail(mail, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Response:');
      console.log(info);
    }
  });
});

app.use(cors());
app.use(express.json());
app.use('/', router);

app.listen(port, () => {
  console.log(`Email service is listening on port ${port}`);
});

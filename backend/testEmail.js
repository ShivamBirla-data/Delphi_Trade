require("dotenv").config();

const transporter = require("./config/mail");

console.log("EMAIL USER:", process.env.EMAIL_USER);
console.log(
  "EMAIL PASSWORD EXISTS:",
  Boolean(process.env.EMAIL_PASS)
);

transporter.verify((error, success) => {
  if (error) {
    console.log("SMTP ERROR:");
    console.log(error);
  } else {
    console.log("SMTP CONNECTION SUCCESS");
  }
});
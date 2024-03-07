const nodemailer = require("nodemailer");

// emailController.js
const sendEmail = async (req, res) => {
  // console.log(req);
  const { name, email, message } = req.body;
  // console.log(req.body);

  // Process the email data and send a response
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      //   port: 587,
      port: process.env.MAIL_PORT,
      secure: true, // Use
      //   SMTP Security:"SSL/TLS",
      auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PWD,
      },
      //   secureConnection: false,
      tls: {
        // Specify the SSL/TLS version (e.g., 'TLSv1.2')
        ciphers: "TLS_AES_128_GCM_SHA256",
      },

      debug: true, // Enable debugging
    });

    const ccRecipient = `${name} <${email}>`; // Assuming fname and email are variables from user input

    let info = await transporter.sendMail({
      from: "info@kapturedesignstudio.co.uk",
      cc: [ccRecipient], // Add CC recipients here
      to: "info@kapturedesignstudio.co.uk",
      //   subject: "email from me ",

      html: `
      <h1>From your Kapture Design Studio</h1><br/>
      <h1>${name}</h1><br/>

          <p>${message}</p><br/><p>My contact email is email:${email} </p>`,
    });

    // console.log("Message sent: %s", info.messageId);

    // Assuming you have a function to send emails, replace the following line with your email-sending logic
    // sendEmailFunction(fname, lname, email, phone, message);

    // Send a success response
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    // Send an error response
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = sendEmail;

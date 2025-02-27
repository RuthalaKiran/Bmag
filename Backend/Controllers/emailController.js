// import emailModel from "../Models/emailModel.js";
import transporter from "../Config/Emailconfig.js";
import { imapConfig } from "../Config/Emailconfig.js";
import imaps from "imap-simple";

// Save Email to Database

export const subscribeUser = async (req, res) => {
  try {
    const { email } = req.body;
    // if (!email) return res.status(400).json({ message: "Email is required" });

    // // Check if email already exists
    // const existingUser = await emailModel.findOne({ email });
    // if (existingUser)
    //   return res.status(400).json({ message: "Email already registered" });

    // // Save to database
    // const newEmail = new emailModel({ email });
    // await newEmail.save();

    // Send confirmation email
    const mailOptions = {
      from: `"Your Website" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "🎉 Subscription Confirmed!",
      text: "Thank you for subscribing! You'll receive an email when we launch.",
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    // Save the email to the "Sent" folder using IMAP
    const emailContent = `From: ${mailOptions.from}
To: ${mailOptions.to}
Subject: ${mailOptions.subject}
MIME-Version: 1.0
Content-Type: text/plain; charset="UTF-8"

${mailOptions.text}`;

    const connection = await imaps.connect(imapConfig);
    await connection.openBox("INBOX.Sent", false); // Open the "Sent" folder
    await connection.append(emailContent, {
      mailbox: "INBOX.Sent",
      flags: ["\\seen"],
      date: new Date(),
    });
    connection.end();
    res
      .status(201)
      .json({status:"true", message: "Subscribed successfully! Confirmation email sent." });
  } catch (error) {
    res.status(500).json({status:"false", message: "Server error", error: error });
  }
};

// Send Launch Email
export const sendLaunchEmail = async () => {
  try {
    const subscribers = await Email.find({});
    const emailList = subscribers.map((user) => user.email);

    const mailOptions = {
      from: `"Your Website" <${process.env.EMAIL_USER}>`,
      to: emailList.join(","),
      subject: "🚀 Our Website is Now Live!",
      text: "We are excited to announce that our website is officially launched! Visit now.",
    };

    await transporter.sendMail(mailOptions);
    console.log("Launch emails sent successfully!");
  } catch (error) {
    console.error("Error sending emails:", error);
  }
};

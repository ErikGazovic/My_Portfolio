import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API);
const PORT = 5000;

const app = express();
app.use(
  cors({
    url: "http://portfolio-gazovic.s3-website.eu-north-1.amazonaws.com",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/send-email", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: "Your Website <onboarding@resend.dev>",
      to: process.env.MY_EMAIL,
      subject: `Message from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        From: ${email}

        Message:
        ${message}
      `,
    });

    console.log("✅ Email sent:", data);
    return res.json({
      success: true,
      data,
      received: { firstName, lastName, email, message },
      reply: `Hello ${firstName + " " + lastName}, we received your message!`,
    });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

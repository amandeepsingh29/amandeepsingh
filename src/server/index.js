const express = require('express');
    const nodemailer = require('nodemailer');
    const app = express();
    const port = 3001;

    app.use(express.json());

    // Generate a unique transporter for each email
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or your email service provider
      auth: {
        user: 'YOUR_EMAIL@gmail.com', // Your email address
        pass: 'YOUR_EMAIL_PASSWORD' // Your email password
      }
    });

    app.post('/api/contact', async (req, res) => {
      const { name, email, subject, message } = req.body;

      const mailOptions = {
        from: email,
        to: 'YOUR_EMAIL@gmail.com', // Recipient email address
        subject: subject,
        text: `Message from ${name}: \n\n${message}`
      };

      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending email. Please try again later.' });
      }
    });

    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });

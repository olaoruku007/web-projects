const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/zthcloud', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the schema and model for students
const StudentSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
});

const Student = mongoose.model('Student', StudentSchema);

// Endpoint to handle form submissions
app.post('/register', async (req, res) => {
  try {
    // Store the student data in MongoDB
    const student = new Student(req.body);
    await student.save();

    // Send an email notification to the admin
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'zthcloud007@gmail.com',
        pass: 'Adeola2023$',
      },
    });

    // Send email to admin
    await transporter.sendMail({
      from: '"Zth Cloud" <zthcloud007@gmail.com>',
      to: 'zthcloud007@gmail.com',
      subject: 'New Student Registration',
      text: `New student registered: ${student.fullName} - ${student.email} - ${student.phone}`,
    });

    // Send confirmation email to student
    await transporter.sendMail({
      from: '"Zth Cloud" <zthcloud007@gmail.com>',
      to: student.email,
      subject: 'Thank you for registering at Zth Cloud',
      text: 'Congratulations on your interest in our Zth Cloud bootcamp. We will be in touch shortly.',
    });

    res.status(200).send({ message: 'Registration successful' });
  } catch (error) {
    res.status(500).send({ error: 'Server error' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

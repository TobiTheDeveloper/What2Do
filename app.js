const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/register', (req, res) => {
  // Handle user registration and store user data in your database
  // You can use a database like MongoDB, MySQL, or any other of your choice
  // Save user data, including username and hashed password
  // You should hash the password for security
  const { username, password } = req.body;
  // Database logic here...
  res.send('Registration successful');
});

app.post('/login', (req, res) => {
  // Handle user login and validate credentials
  // Set user session to maintain authentication
  // Database logic here...
  req.session.user = { username: req.body.username };
  res.send('Login successful');
});

app.post('/upload', upload.single('profilePicture'), (req, res) => {
  // Handle profile picture uploads and save the file path in the database
  // Database logic here...
  res.send('Profile picture uploaded successfully');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

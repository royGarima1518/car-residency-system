const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();   //creates a new instance of an Express application
const User = require('./models/userModel');

const port = 3000;
const base = `${__dirname}/public`;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/parkingDB', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

// Close the connection when the server is terminated
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Database connection closed');
    process.exit(0);
  });
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(`${base}/login.html`);
    console.log(base);
  });

  app.get('/resident.js', (req, res) => {
    res.sendFile(`${base}/resident.js`);
  });

  app.get('/login.js', (req, res) => {
    res.sendFile(`${base}/login.js`);
  });

  app.get('/parking.js', (req, res) => {
    res.sendFile(`${base}/parking.js`);
  });

  app.get('/create_account.html', (req, res) => {
    res.sendFile(`${base}/create_account.html`);
  });

  app.get('/login_existing.html', (req, res) => {
    res.sendFile(`${base}/login_existing.html`);
  });

  app.get('/residentuser.html', (req, res) => {
    res.sendFile(`${base}/residentuser.html`);
  });

  app.get('/resident.html', (req, res) => {
    res.sendFile(`${base}/resident.html`);
  });

  app.get('/login.html', (req, res) => {
    res.sendFile(`${base}/login.html`);
  });

  app.get('/residentuser.html', (req, res) => {
    res.sendFile(`${base}/residentuser.html`);
  });

  app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
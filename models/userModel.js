const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  vehicle_model: String,
  license_plate: String,
  parking_slot: String,
  date: String,
  time: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;

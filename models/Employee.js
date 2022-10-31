const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Surname: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Contact_Number: {
    type: Number,
    required: true,
  },
  ID_Number: {
    type: Number,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Role: {
    type: String,
    required: true,
  },
  Department: {
    type: String,
    required: true,
  },
});

module.exports = Employee = mongoose.model('employees', EmployeeSchema);

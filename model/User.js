const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName: {
    type: String,
    required: [true, "please enter your first name"],
    trim: true,
    lowercase: true,
  },
  lastName: {
    type: String,
    required: [true, "please enter your last name"],
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, "please enter your email"],
    trim: true,
    unique: true,
  },
  gender: {
    type: String,
    require: true,
  },
  term: Boolean,
  role:String,
  //not required employer section
  companyName: {
    type: String,
    lowercase: true,
  },
  employeeRange: String,
  companyCategory: {
    type: String,
    lowercase: true,
  },
  roleInCompany: {
    type: String,
    lowercase: true,
  },
  //not required candidate section
  country: {
    type: String,
    lowercase: true,
  },
  address: {
    type: String,
    lowercase: true,
  },
  city: {
    type: String,
    lowercase: true,
  },
  postcode: {
    type: String,
    lowercase: true,
  },
},{
    timestamps:true
});

const User = mongoose.model('User',userSchema)

module.exports = User

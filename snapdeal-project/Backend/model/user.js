const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String, required: true },
  city: { type: String, required: true },
  age: { type: Number, required: true },
});

const User = mongoose.model("user", UserSchema);

module.exports = { User };

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  imageurl: { type: String, trim: true, required: true },
  email: { type: String, trim: true, unique: true, required: true },
  username: { type: String, trim: true, unique: true, required: true },
  gender: { type: String, required: true },
  lookingFor: { type: String, required: true },
  interests: String,
  aboutMe: String,
  date: { type: Date, default: Date.now }
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;

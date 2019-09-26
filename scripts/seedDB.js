const mongoose = require("mongoose");
const db = require("../models");


// This file empties the Profiles collection and inserts the profiles below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/profilesdb"
);

const profileSeed = [
  {
    imageurl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    email: "this@here.com",
    username: "usertest1",
    gender: "male",
    lookingFor: "friendship",
    interests: "",
    aboutMe: "something about me",
    date: new Date(Date.now())
  }
];

db.Profile
  .remove({})
  .then(() => db.Profile.collection.insertMany(profileSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

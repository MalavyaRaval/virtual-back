const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  sponsor: { type: String },
  coSponsor: { type: String },
  security: { type: String },
  food: { type: String },
  custodian: { type: String },
  description: { type: String, required: true },
  image: { type: String }, // Change this Malav Dev
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;

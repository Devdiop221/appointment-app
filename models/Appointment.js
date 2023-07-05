const mongoose = require("mongoose");

const appointment = new mongoose.Schema({
  Date: {
    type: String,
  },
  heure: {
    type: String,
  },

  status: {
    type: String,
  },
  medecinId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Medecin",
    },
  ],
  userId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  serviceId: [
    {
      type: mongoose.Schema.Types.String,
      ref: "Service",
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Appointment = mongoose.model("Appointment", appointment);

module.exports = Appointment;

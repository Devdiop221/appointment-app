const mongoose = require("mongoose");

const availableSchema = mongoose.Schema({
  jour: {
    type: String,
  },
  heureDebut: {
    type: String,
  },
  heureFin: {
    type: String,
  },
  Etat: {
    type: String,
  },
  medecinId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Medecin",
    },
  ],
});

const Availability = mongoose.model('Availability',availableSchema);

module.exports = Availability;
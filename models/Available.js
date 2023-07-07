const mongoose = require("mongoose");

const availableSchema = new mongoose.Schema({
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

const Available = mongoose.model("Availability", availableSchema);

module.exports = Available;

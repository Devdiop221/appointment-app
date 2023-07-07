const mongoose = require("mongoose");

const medecinSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  specialisation: {
    type: String,
  },
  email: {
    type: String,
  },
  telephone: {
    type: Number,
  },
  adresse: {
    type: String,
  },
  structureDeSante: {
    type: String,
    ref: "Structure",
  },
  disponibilité: [
    {
      jourSemaine: String,
      heureDebut: String,
      heureFin: String,
    },
  ],
  servicesIds: [{ type: String ,ref: "Service" }],
});

const Medecin = mongoose.model("Medecin", medecinSchema);

module.exports = Medecin;

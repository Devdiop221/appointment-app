const mongoose = require("mongoose");

const medecinSchema = new mongoose.Schema({
  // id,nom,prenom,id specialise,email,telephone,adresse,structure de sante,disponibilite,id service
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  specialisationId: {
    type: String,
    ref: "Specialiste",
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

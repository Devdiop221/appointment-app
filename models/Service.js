const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },

  code: {
    type: Number,
    unique: true,
  },

  prix: {
    type: Number,
    required: true,
  },
});

const Service = mongoose.model("Service", serviceSchema);
module.exports = Service;

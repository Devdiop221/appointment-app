const Medecin = require("../models/Medecin");

const MedecinController = {
  getAll: async (req, res) => {
    try {
      const medecins = await Medecin.find();
      return res.status(201).json({
        entity: medecins,
        success: true,
        message: "medecins fetched successfully",
      });
    } catch (err) {
      console.log("Error fetching all the medecins");
      throw new Error("Error fetching all the medecins");
    }
  },

  getByID: (req, res) => {
    const id = req.params.id;
    Medecin.findById(id)
      .then((medecin) =>
        res.status(200).json({
          entity: medecin,
          success: true,
          message: "Medecin found",
        })
      )
      .catch((err) => res.status(500).json({ message: err.message }));
  },

  createNew: (req, res) => {
    const medecin = new Medecin(req.body);
    medecin
      .save()
      .then(() =>
        res.status(201).json({
          entity: medecin,
          success: true,
          message: "The medecin has been created",
        })
      )
      .catch((err) => {
        throw new Error(`An error occurred while saving the medecin ${err}`);
      });
  },

  Update: (req, res) => {
    const id = req.params.id;
    let medecinDataToUpdate = {};
    if (req.body.nom) medecinDataToUpdate.nom = req.body.nom;
    if (req.body.prenom) medecinDataToUpdate.prenom = req.body.prenom;
    if (req.body.specialisation)
      medecinDataToUpdate.specialisation = req.body.specialisation;
    if (req.body.email) medecinDataToUpdate.email = req.body.email;
    if (req.body.telephone) medecinDataToUpdate.telephone = req.body.telephone;
    if (req.body.adresse) medecinDataToUpdate.adresse = req.body.adresse;
    if (req.body.structureDeSante)
      medecinDataToUpdate.structureDeSante = req.body.structureDeSante;
    if (req.body.disponibilité)
      medecinDataToUpdate.disponibilité = req.body.disponibilité;
    if (req.body.servicesIds)
      medecinDataToUpdate.servicesIds = req.body.servicesIds;

    return new Promise((resolve, reject) => {
      Medecin.findOneAndUpdate({ _id: id }, medecinDataToUpdate, { new: true })
        .then((medecin) => {
          resolve(
            res.status(200).json({
              entity: medecin,
              success: true,
              message: "Medecin updated successfully!",
            })
          );
        })
        .catch((error) => reject("Error updating medecin"));
    });
  },

  delete: (req, res) => {
    const id = req.params.id;
    try {
      Medecin.deleteOne({ _id: id })
        .then((medecin) =>
          res.status(200).json({
            entity: medecin,
            success: true,
            message: `User with ID ${id} deleted`,
          })
        )
        .catch((err) => res.status(500).json({ message: err.message }));
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = MedecinController;

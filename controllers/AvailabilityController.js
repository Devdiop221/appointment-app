const Available = require('../models/Available');

const AvailableController = {
  getAllAvailibilities: async (req, res) => {
    try {
      const available = await Available.find();
      return res.status(201).json({
        entity: available,
        sucess: true,
        message: "successfully fetched all availibilities",
      });
    } catch (error) {
      console.log("Error in fetching availability");
      throw new Error("Error fetching all availability");
    }
  },

  getAvailabilityById: (req, res) => {
    const id = req.params.id;
    Available.findById(id)
      .then((available) =>
        res.status(200).json({
          entity: available,
          success: true,
          message: "Successfully retrieved Availability",
        })
      )
      .catch((err) => res.status(500).json({ message: err.message }));
  },

  createAvailability: (req, res) => {
    const available = new Available(req.body);
    available
      .save()
      .then((available) =>
        res.status(201).json({
          entity: available,
          success: true,
          message: "Created a New Availibity",
        })
      )
      .catch((err) => res.status(400).json({ message: err.message }));
  },
  updateAvailability: (req, res) => {
    const id = req.params.id;
    let availableDataToUpdate = {};
    if (req.body.jour) availableDataToUpdate.jour = req.body.jour;
    if (req.body.heureDebut)
      availableDataToUpdate.heureDebut = req.body.heureDebut;
    if (req.body.heureFin) availableDataToUpdate.heureFin = req.body.heureFin;
    if (req.body.medecinId)
      availableDataToUpdate.medecinId = req.body.medecinId;
    return new Promise((resolve, reject) => {
      Available.findOneAndUpdate({ _id: id }, availableDataToUpdate, {
        new: true,
      })
        .then((available) => {
          resolve(
            res.status(200).json({
              entity: available,
              success: true,
              message: "available updated successfully!",
            })
          );
        })
        .catch((error) => reject("Error updating available"));
    });
  },
  deleteAvailibility: (req, res) => {
    const id = req.params.id;
    try {
      Available.deleteOne({ _id: id })
        .then((available) =>
          res.status(200).json({
            entity: available,
            success: true,
            message: `available with ID ${id} deleted`,
          })
        )
        .catch((err) => res.status(500).json({ message: err.message }));
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = AvailableController;
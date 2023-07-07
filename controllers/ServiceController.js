const Service = require("../models/Service");

const ServiceController = {
  getAllServices: async (req, res) => {
    try {
      const service = await Service.find();
      return res.status(201).json({
        entity: service,
        success: true,
        message: "Services retrieved successfully",
      });
    } catch (error) {
      console.log("Error in getting services", error);
      throw new Error("Error ftching all services");
    }
  },

  getServiceById: (req, res) => {
    const id = req.params.id;
    Service.findById(id)
      .then((service) => {
        res.status(200).json({
          entity: service,
          success: true,
          message: "Service found",
        });
      })
      .catch((err) =>
        res.status(500).json({
          message: err.message,
        })
      );
  },

  createService: (req, res) => {
    const service = new Service(req.body);
    service
      .save()
      .then(() =>
        res.status(201).json({
          entity: service,
          success: true,
          message: `The service has been created`,
        })
      )
      .catch((err) => {
        res.status(400).json({
          message: err.message,
        });
      });
  },
  updateService: (req, res) => {
    const id = req.params.id;
    let serviceDataToUpdate = {};
    if (req.body.nom) serviceDataToUpdate.nom = req.body.nom;
    if (req.body.code) serviceDataToUpdate.code = req.body.code;
    if (req.body.prix) serviceDataToUpdate.prix = req.body.prix;
    return new Promise((resolve, reject) => {
      Service.findOneAndUpdate({ _id: id }, serviceDataToUpdate, {
        new: true,
      })
        .then((service) => {
          resolve(
            res.status(200).json({
              entity: service,
              success: true,
              message: "service updated successfully!",
            })
          );
        })
        .catch((error) => reject("Error updating service"));
    });
  },
  deleteService: (req, res) => {
    const id = req.params.id;
    try {
      Service.deleteOne({ _id: id })
        .then((service) =>
          res.status(200).json({
            entity: service,
            success: true,
            message: `service with ID ${id} deleted`,
          })
        )
        .catch((err) => res.status(500).json({ message: err.message }));
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = ServiceController;

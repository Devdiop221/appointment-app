const Appointment = require("../models/Appointment");

const AppointmentController = {
  getAllAppointment: async (req, res) => {
    try {
      const appointment = await Appointment.find();
      return res.status(201).json({
        entity: appointment,
        success: true,
        message: "appointments fetched successfully",
      });
    } catch (err) {
      console.log("Error fetching  all appointments");
      throw new Error("Error fetching all appointments");
    }
  },
  getAppointmentByID: (req, res) => {
    const id = req.params.id;
    Appointment.findById(id)
      .then((appointment) =>
        res.status(200).json({
          entity: appointment,
          success: true,
          message: "appointment found",
        })
      )
      .catch((err) => res.status(500).json({ message: err.message }));
  },
  createAppointment: (req, res) => {
    const appointment = new Appointment(req.body);
    appointment
      .save()
      .then((appointment) =>
        res.status(201).json({
          entity: appointment,
          success: true,
          message: `The appointment has been created`,
        })
      )
      .catch((err) => res.status(400).json({ message: err.message }));
  },
  updateAppointment: (req, res) => {
    const id = req.params.id;
    let appointmentDataToUpdate = {};
    if (req.body.Date) appointmentDataToUpdate.Date = req.body.Date;
    if (req.body.heure) appointmentDataToUpdate.heure = req.body.heure;
    if (req.body.status) appointmentDataToUpdate.status = req.body.status;
    return new Promise((resolve, reject) => {
      Appointment.findOneAndUpdate({ _id: id }, appointmentDataToUpdate, {
        new: true,
      })
        .then((appointment) => {
          resolve(
            res.status(200).json({
              entity: appointment,
              success: true,
              message: "Appointment updated successfully!",
            })
          );
        })
        .catch((error) => reject("Error updating appointment"));
    });
  },
  deleteAppointment: (req, res) => {
    const id = req.params.id;
    try {
      Appointment.deleteOne({ _id: id })
        .then((appointment) =>
          res.status(200).json({
            entity: appointment,
            success: true,
            message: `Appointment with ID ${id} deleted`,
          })
        )
        .catch((err) => res.status(500).json({ message: err.message }));
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = AppointmentController;

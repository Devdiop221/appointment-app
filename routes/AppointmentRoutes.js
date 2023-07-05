const express = require("express");
const AppointmentController = require("../controllers/AppointmentController");

const router = express.Router();

// Get All appointments
router.get("/", AppointmentController.getAllAppointment);

// get appointment by id
router.get("/:id", AppointmentController.getAppointmentByID);

// create an appointment
router.post('/',AppointmentController.createAppointment);

// update appointment
router.put('/:id', AppointmentController.updateAppointment);

// delete appointment
router.delete('/:id',AppointmentController.deleteAppointment);

const express = require("express");
const AvailabilityController = require("../controllers/AvailabilityController");

const router = express.Router();

// Get All availabilities
router.get("/", AvailabilityController.getAllAvailibilities);

// get availability by id
router.get("/:id", AvailabilityController.getAvailabilityById);

// create an availability
router.post("/", AvailabilityController.createAvailability);

// update availability
router.put("/:id", AvailabilityController.updateAvailability);

// delete availability
router.delete("/:id", AvailabilityController.deleteAvailibility);

const express = require("express");
const ServiceController = require("../controllers/ServiceController");

const router = express.Router();


// Get All services
router.get("/", ServiceController.getAllServices);

// get service by id
router.get("/:id", ServiceController.getServiceById);

// create a service
router.post('/',ServiceController.createService);

// update service
router.put('/:id',ServiceController.updateService);

// delete service
router.delete('/:id',ServiceController.deleteService);
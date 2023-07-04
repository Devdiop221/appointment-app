const express = require('express');
const MedecinController = require('../controllers/MedecinController')

const router = express.Router();

// Get all medecins from the database
router.get("/",MedecinController.getAll);

//Get medecin by id
router.get("/:id",MedecinController.getByID);

// create a new medecin
router.post('/', MedecinController.createNew);

// Update a medecin by id
router.put('/:id', MedecinController.Update);

// delete a user by id
router.delete('/:id', MedecinController.delete)


module.exports = router;
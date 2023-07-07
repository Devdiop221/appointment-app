const express = require('express');
const UserController = require('../controllers/UserController')

const router = express.Router();


// get all users from the database
router.get("/", UserController.read);

// get user by id
router.get('/:id', UserController.getByID)

// create a new user
router.post("/", UserController.create);

// update a user by id
router.put("/:id", UserController.update);

// login user
router.patch('/', UserController.loginUser);



// delete a user by id
router.delete("/:id", UserController.remove);



module.exports = router;

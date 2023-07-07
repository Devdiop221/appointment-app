const express = require("express");
const mongoose = require("mongoose");
const UserController = require("./controllers/UserController");
const MedecinController = require("./controllers/MedecinController");
const AppointmentController = require("./controllers/AppointmentController");
const ServiceController = require("./controllers/ServiceController");
const AvailabilityController = require("./controllers/AvailabilityController");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/gestion_sante", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.listen(3000, () => {
  console.log("Server started at port: 3000");
});


// User

// post user
app.post("/users", UserController.create);

// get all users from the database
app.get("/users", UserController.read);

// get user by id

app.get("/users/:id", UserController.getByID);

// update user
app.put("/users/:id", UserController.update);

// delete user
app.delete("/users/:id", UserController.remove);

// login User
app.patch("/login", UserController.loginUser);




// Medecin


//Post a new medecin
app.post('/medecins', MedecinController.createNew);

// get all medecins
app.get('/medecins', MedecinController.getAll);

//get a medecin by id
app.get('/medecins/:id', MedecinController.getByID);

// update a medecin
app.put('/medecins/:id', MedecinController.Update);

// delete a medecin
app.delete('/medecins/:id', MedecinController.delete);



// Appoointment


// Post an appointment
app.post('/appointments',AppointmentController.createAppointment);

// Get all appointment
app.get('/appointments',AppointmentController.getAllAppointment);

// get appointment by id
app.get('/appointments/:id',AppointmentController.getAppointmentByID);

// update an appointment
app.put('/appointments/:id',AppointmentController.updateAppointment);

// delete a appointment
app.delete('/appointments/:id',AppointmentController.deleteAppointment);


// Service


// Post a service
app.post('/services',ServiceController.createService);

// Get all services
app.get('/services',ServiceController.getAllServices);

// get service by id
app.get('/services/:id',ServiceController.getServiceById);

// update a service
app.put('/services/:id',ServiceController.updateService);

// delete a service
app.delete('/services/:id',ServiceController.deleteService);


// Availability

// Post an availability
app.post('/availabilities',AvailabilityController.createAvailability);

// Get all availabilities
app.get('/availabilities',AvailabilityController.getAllAvailibilities);

// Get availability by id
app.get('/availabilities/:id',AvailabilityController.getAvailabilityById);

// update an availability
app.put('/availabilities/:id',AvailabilityController.updateAvailability);

// Delete an availability
app.delete('/availabilities/:id',AvailabilityController.deleteAvailibility);



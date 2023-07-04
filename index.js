const express = require("express");
const mongoose = require("mongoose");
const UserController = require("./controllers/UserController");
const MedecinController = require("./controllers/MedecinController");

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

// Medecin


//Post a new medecin
app.post('/medecins', MedecinController.createNew);

// get all medecins
app.get('/medecins', MedecinController.getAll);

//get a medeci by id
app.get('/medecins/:id', MedecinController.getByID);

// update a medecin
app.put('/medecins/:id', MedecinController.Update);

// delete a medecin
app.delete('/medecins/:id', MedecinController.delete);

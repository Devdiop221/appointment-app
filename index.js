const express = require("express");
const mongoose = require("mongoose");
const UserController = require("./controllers/UserController");
const MedecinController = require("./controllers/MedecinController");
const AppointmentController = require("./controllers/AppointmentController");
const ServiceController = require("./controllers/ServiceController");
const AvailabilityController = require("./controllers/AvailabilityController");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger"); // Chemin vers votre fichier de configuration Swagger

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
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

// User Schema Swagger

/**
 * @swagger
 * tags:
 *   name: Utilisateurs
 *   description: API pour les utilisateurs
 * /users:
 *   get:
 *     summary: Récupère tous les utilisateurs
 *     description: Endpoint pour récupérer tous les utilisateurs.
 *     tags: [Utilisateurs]
 *     responses:
 *       200:
 *         description: Succès
 *       500:
 *         description: Erreur serveur
 *
 *   post:
 *     summary: Crée un nouvel utilisateur
 *     description: Endpoint pour créer un nouvel utilisateur.
 *     tags: [Utilisateurs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *       400:
 *         description: Requête invalide
 *       500:
 *         description: Erreur serveur
 *
 * /users/{id}:
 *   get:
 *     summary: Récupère un utilisateur par ID
 *     description: Endpoint pour récupérer un utilisateur en utilisant son ID.
 *     tags: [Utilisateurs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'utilisateur
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Succès
 *       404:
 *         description: Utilisateur non trouvé
 *
 *   put:
 *     summary: Met à jour un utilisateur par ID
 *     description: Endpoint pour mettre à jour un utilisateur en utilisant son ID.
 *     tags: [Utilisateurs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'utilisateur
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Utilisateur mis à jour avec succès
 *       404:
 *         description: Utilisateur non trouvé
 *       500:
 *         description: Erreur serveur
 *
 *   delete:
 *     summary: Supprime un utilisateur par ID
 *     description: Endpoint pour supprimer un utilisateur en utilisant son ID.
 *     tags: [Utilisateurs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'utilisateur
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Utilisateur supprimé avec succès
 *       404:
 *         description: Utilisateur non trouvé
 *       500:
 *         description: Erreur serveur
 *
 *
 * /login:
 *   patch:
 *     summary: Connexion de l'utilisateur
 *     description: Endpoint pour permettre à l'utilisateur de se connecter.
 *     tags: [Utilisateurs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: Connexion réussie
 *       400:
 *         description: Requête invalide
 *       401:
 *         description: Échec de l'authentification
 *       500:
 *         description: Erreur serveur
 *
 *
 * /medecins:
 *   get:
 *     summary: Récupère tous les médecins
 *     description: Endpoint pour récupérer tous les médecins.
 *     tags: [Médecins]
 *     responses:
 *       200:
 *         description: Succès
 *       500:
 *         description: Erreur serveur
 *
 *   post:
 *     summary: Crée un nouvel médecin
 *     description: Endpoint pour créer un nouvel médecin.
 *     tags: [Médecins]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Medecin'
 *     responses:
 *       201:
 *         description: Médecin créé avec succès
 *       400:
 *         description: Requête invalide
 *       500:
 *         description: Erreur serveur
 *
 * /medecins/{id}:
 *   get:
 *     summary: Récupère un médecin par ID
 *     description: Endpoint pour récupérer un médecin en utilisant son ID.
 *     tags: [Médecins]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du médecin
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Succès
 *       404:
 *         description: Médecin non trouvé
 *
 *   put:
 *     summary: Met à jour un médecin par ID
 *     description: Endpoint pour mettre à jour un médecin en utilisant son ID.
 *     tags: [Mé * decins]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'utilisateur
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Medecin'
 *     responses:
 *       200:
 *         description: Médecin mis à jour avec succès
 *       404:
 *         description: Médecin non trouvé
 *       500:
 *         description: Erreur serveur
 *
 *   delete:
 *     summary: Supprime un médecin par ID
 *     description: Endpoint pour supprimer un médecin en utilisant son ID.
 *     tags: [Médecins]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du médecin
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Médecin supprimé avec succès
 *       404:
 *         description: Médecin non trouvé
 *       500:
 *         description: Erreur serveur
 *
 *
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         nom:
 *           type: string
 *           description: Le nom de l'utilisateur.
 *         prenom:
 *           type: string
 *           description: Le prénom de l'utilisateur.
 *         adresse:
 *           type: string
 *           description: L'adresse de l'utilisateur.
 *         telephone:
 *           type: number
 *           description: Le numéro de téléphone de l'utilisateur.
 *         email:
 *           type: string
 *           description: L'adresse e-mail de l'utilisateur.
 *         password:
 *           type: string
 *           description: Le mot de passe de l'utilisateur.
 *       required:
 *         - nom
 *         - prenom
 *         - adresse
 *         - telephone
 *         - email
 *         - password
 *
 *     LoginRequest:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: L'adresse e-mail de l'utilisateur.
 *         password:
 *           type: string
 *           description: Le mot de passe de l'utilisateur.
 *       required:
 *         - email
 *         - password
 *
 *     Medecin:
 *       type: object
 *       properties:
 *         nom:
 *           type: string
 *           description: Le nom du médecin.
 *         prenom:
 *           type: string
 *           description: Le prénom du médecin.
 *         specialisation:
 *           type: string
 *           description: La spécialisation du médecin.
 *         email:
 *           type: string
 *           description: L'adresse e-mail du médecin.
 *         telephone:
 *           type: number
 *           description: Le numéro de téléphone du médecin.
 *         adresse:
 *           type: string
 *           description: L'adresse du médecin.
 *         structureDeSante:
 *           type: string
 *           description: L'ID de la structure de santé liée au médecin.
 *         disponibilite:
 *           type: array
 *           description: Les disponibilités du médecin.
 *           items:
 *             type: object
 *             properties:
 *               jourSemaine:
 *                 type: string
 *                 description: Le jour de la semaine.
 *               heureDebut:
 *                 type: string
 *                 description: L'heure de début de disponibilité.
 *               heureFin:
 *                 type: string
 *                 description: L'heure de fin de disponibilité.
 *         servicesIds:
 *           type: array
 *           description: Les ID des services associés au médecin.
 *           items:
 *             type: string
 *       required:
 *         - nom
 *         - prenom
 *         - email
 *         - telephone
 *         - adresse
  */




// Medecin Schema Swagger


/**
 * @swagger
 * tags:
 *   name: Médecins
 *   description: API pour les médecins
 * /medecins:
 *   get:
 *     summary: Récupère tous les médecins
 *     description: Endpoint pour récupérer tous les médecins.
 *     tags: [Médecins]
 *     responses:
 *       200:
 *         description: Succès
 *       500:
 *         description: Erreur serveur
 *
 *   post:
 *     summary: Crée un nouveau médecin
 *     description: Endpoint pour créer un nouveau médecin.
 *     tags: [Médecins]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Medecin'
 *     responses:
 *       201:
 *         description: Médecin créé avec succès
 *       400:
 *         description: Requête invalide
 *       500:
 *         description: Erreur serveur
 *
 * /medecins/{id}:
 *   get:
 *     summary: Récupère un médecin par ID
 *     description: Endpoint pour récupérer un médecin en utilisant son ID.
 *     tags: [Médecins]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du médecin
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Succès
 *       404:
 *         description: Médecin non trouvé
 *
 *   put:
 *     summary: Met à jour un médecin par ID
 *     description: Endpoint pour mettre à jour un médecin en utilisant son ID.
 *     tags: [Médecins]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du médecin
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Medecin'
 *     responses:
 *       200:
 *         description: Médecin mis à jour avec succès
 *       404:
 *         description: Médecin non trouvé
 *       500:
 *         description: Erreur serveur
 *
 *   delete:
 *     summary: Supprime un médecin par ID
 *     description: Endpoint pour supprimer un médecin en utilisant son ID.
 *     tags: [Médecins]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du médecin
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Médecin supprimé avec succès
 *       404:
 *         description: Médecin non trouvé
 *       500:
 *         description: Erreur serveur
 *
 *
 *
 *
 *
 * components:
 *   schemas:
 *    Medecin:
 *       type: object
 *       properties:
 *         nom:
 *           type: string
 *           description: Le nom du médecin.
 *         prenom:
 *           type: string
 *           description: Le prénom du médecin.
 *         specialisation:
 *           type: string
 *           description: La spécialisation du médecin.
 *         email:
 *           type: string
 *           description: L'adresse e-mail du médecin.
 *         telephone:
 *           type: number
 *           description: Le numéro de téléphone du médecin.
 *         adresse:
 *           type: string
 *           description: L'adresse du médecin.
 *         structureDeSante:
 *           type: string
 *           description: L'ID de la structure de santé liée au médecin.
 *         disponibilite:
 *           type: array
 *           description: Les disponibilités du médecin.
 *           items:
 *             type: object
 *             properties:
 *               jourSemaine:
 *                 type: string
 *                 description: Le jour de la semaine.
 *               heureDebut:
 *                 type: string
 *                 description: L'heure de début de disponibilité.
 *               heureFin:
 *                 type: string
 *                 description: L'heure de fin de disponibilité.
 *         servicesIds:
 *           type: array
 *           description: Les ID des services associés au médecin.
 *           items:
 *             type: string
 *       required:
 *         - nom
 *         - prenom
 */



// Appointement Schema Swagger

/**
 * @swagger
 * tags:
 *   name: Rendez-vous
 *   description: API pour les rendez-vous
 * /appointments:
 *   get:
 *     summary: Récupère tous les rendez-vous
 *     description: Endpoint pour récupérer tous les rendez-vous.
 *     tags: [Rendez-vous]
 *     responses:
 *       200:
 *         description: Succès
 *       500:
 *         description: Erreur serveur
 *
 *   post:
 *     summary: Crée un nouveau rendez-vous
 *     description: Endpoint pour créer un nouveau rendez-vous.
 *     tags: [Rendez-vous]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Appointment'
 *     responses:
 *       201:
 *         description: Rendez-vous créé avec succès
 *       400:
 *         description: Requête invalide
 *       500:
 *         description: Erreur serveur
 *
 * /appointments/{id}:
 *   get:
 *     summary: Récupère un rendez-vous par ID
 *     description: Endpoint pour récupérer un rendez-vous en utilisant son ID.
 *     tags: [Rendez-vous]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du rendez-vous
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Succès
 *       404:
 *         description: Rendez-vous non trouvé
 *
 *   put:
 *     summary: Met à jour un rendez-vous par ID
 *     description: Endpoint pour mettre à jour un rendez-vous en utilisant son ID.
 *     tags: [Rendez-vous]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du rendez-vous
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Appointment'
 *     responses:
 *       200:
 *         description: Rendez-vous mis à jour avec succès
 *       404:
 *         description: Rendez-vous non trouvé
 *       500:
 *         description: Erreur serveur
 *
 *   delete:
 *     summary: Supprimer un rendez-vous par ID
 *     description: Endpoint pour supprimer un rendez-vous en utilisant son ID.
 *     tags: [Rendez-vous]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du rendez-vous
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Rendez-vous supprimé avec succès
 *       404:
 *         description: Rendez-vous non trouvé
 *       500:
 *         description: Erreur serveur
 *
 *
 *
 *
 *
 * components:
 *   schemas:
 *    Appointment:
 *       type: object
 *       properties:
 *         Date:
 *           type: string
 *           description: La date du rendez-vous.
 *         heure:
 *           type: string
 *           description: L'heure du rendez-vous.
 *         status:
 *           type: string
 *           description: Le statut du rendez-vous.
 *         medecinId:
 *           type: array
 *           description: Les ID des médecins associés au rendez-vous.
 *           items:
 *             type: string
 *         userId:
 *           type: array
 *           description: Les ID des utilisateurs associés au rendez-vous.
 *           items:
 *             type: string
 *         serviceId:
 *           type: array
 *           description: Les ID des services associés au rendez-vous.
 *           items:
 *             type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: La date de création du rendez-vous.
 */


// Services Schema Swagger
/**
 * @swagger
 * tags:
 *   name: Services
 *   description: API pour les services
 * /services:
 *   get:
 *     summary: Récupère tous les services
 *     description: Endpoint pour récupérer tous les services.
 *     tags: [Services]
 *     responses:
 *       200:
 *         description: Succès
 *       500:
 *         description: Erreur serveur
 *
 *   post:
 *     summary: Crée un nouveau service
 *     description: Endpoint pour créer un nouveau service.
 *     tags: [Services]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       201:
 *         description: Service créé avec succès
 *       400:
 *         description: Requête invalide
 *       500:
 *         description: Erreur serveur
 *
 * /services/{id}:
 *   get:
 *     summary: Récupère un service par ID
 *     description: Endpoint pour récupérer un service en utilisant son ID.
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du service
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Succès
 *       404:
 *         description: Service non trouvé
 *
 *   put:
 *     summary: Met à jour un service par ID
 *     description: Endpoint pour mettre à jour un service en utilisant son ID.
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du service
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       200:
 *         description: Service mis à jour avec succès
 *       404:
 *         description: Service non trouvé
 *       500:
 *         description: Erreur serveur
 *
 *   delete:
 *     summary: Supprimer un service par ID
 *     description: Endpoint pour supprimer un service en utilisant son ID.
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du service
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Service supprimé avec succès
 *       404:
 *         description: Service non trouvé
 *       500:
 *         description: Erreur serveur
 *
 *
 *
 *
 *
 * components:
 *   schemas:
 *    Service:
 *       type: object
 *       properties:
 *         nom:
 *           type: string
 *           description: Le nom du service.
 *         code:
 *           type: number
 *           description: Le code unique du service.
 *         prix:
 *           type: number
 *           description: Le prix du service.
 *       required:
 *         - nom
 *         - prix
 */



// Availability Schema Swagger
/**
 * @swagger
 * tags:
 *   name: Availabilities
 *   description: API pour les disponibilités
 * /availabilities:
 *   get:
 *     summary: Récupère tous les disponibilités
 *     description: Endpoint pour récupérer tous les disponibilités.
 *     tags: [Availabilities]
 *     responses:
 *       200:
 *         description: Succès
 *       500:
 *         description: Erreur serveur
 *
 *   post:
 *     summary: Crée un nouveau disponibilité
 *     description: Endpoint pour créer un nouveau disponibilité.
 *     tags: [Availabilities]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Availability'
 *     responses:
 *       201:
 *         description: Disponibilité créé avec succès
 *       400:
 *         description: Requête invalide
 *       500:
 *         description: Erreur serveur
 *
 * /availabilities/{id}:
 *   get:
 *     summary: Récupère une disponibilité par ID
 *     description: Endpoint pour récupérer une disponibilité en utilisant son ID.
 *     tags: [Availabilities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du disponibilité
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Succès
 *       404:
 *         description: Disponibilité non trouvé
 *
 *   put:
 *     summary: Met à jour une disponibilité par ID
 *     description: Endpoint pour mettre à jour une disponibilité en utilisant son ID.
 *     tags: [Availabilities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du disponibilité
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Availability'
 *     responses:
 *       200:
 *         description: Disponibilité mis à jour avec succès
 *       404:
 *         description: Disponibilité non trouvé
 *       500:
 *         description: Erreur serveur
 *
 *   delete:
 *     summary: Supprimer une disponibilité par ID
 *     description: Endpoint pour supprimer une disponibilités en utilisant son ID.
 *     tags: [Availabilities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du disponibilité
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Disponibilité supprimé avec succès
 *       404:
 *         description: Disponibilité non trouvé
 *       500:
 *         description: Erreur serveur
 *
 *
 *
 *
 *
 * components:
 *   schemas:
 *    Availability:
 *       type: object
 *       properties:
 *         jour:
 *           type: string
 *           description: Le jour de disponibilité.
 *         heureDebut:
 *           type: string
 *           description: L'heure de début de disponibilité.
 *         heureFin:
 *           type: string
 *           description: L'heure de fin de disponibilité.
 *         Etat:
 *           type: string
 *           description: L'état de disponibilité.
 *         medecinId:
 *           type: array
 *           description: Les ID des médecins associés à la disponibilité.
 *           items:
 *             type: string
 */



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
app.post("/medecins", MedecinController.createNew);

// get all medecins
app.get("/medecins", MedecinController.getAll);

//get a medecin by id
app.get("/medecins/:id", MedecinController.getByID);

// update a medecin
app.put("/medecins/:id", MedecinController.Update);

// delete a medecin
app.delete("/medecins/:id", MedecinController.delete);

// Appoointment

// Post an appointment
app.post("/appointments", AppointmentController.createAppointment);

// Get all appointment
app.get("/appointments", AppointmentController.getAllAppointment);

// get appointment by id
app.get("/appointments/:id", AppointmentController.getAppointmentByID);

// update an appointment
app.put("/appointments/:id", AppointmentController.updateAppointment);

// delete a appointment
app.delete("/appointments/:id", AppointmentController.deleteAppointment);

// Service

// Post a service
app.post("/services", ServiceController.createService);

// Get all services
app.get("/services", ServiceController.getAllServices);

// get service by id
app.get("/services/:id", ServiceController.getServiceById);

// update a service
app.put("/services/:id", ServiceController.updateService);

// delete a service
app.delete("/services/:id", ServiceController.deleteService);

// Availability

// Post an availability
app.post("/availabilities", AvailabilityController.createAvailability);

// Get all availabilities
app.get("/availabilities", AvailabilityController.getAllAvailibilities);

// Get availability by id
app.get("/availabilities/:id", AvailabilityController.getAvailabilityById);

// update an availability
app.put("/availabilities/:id", AvailabilityController.updateAvailability);

// Delete an availability
app.delete("/availabilities/:id", AvailabilityController.deleteAvailibility);

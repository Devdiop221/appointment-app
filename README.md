# Appointment App avec Express, MongoDB et Swagger

Ce projet est un examen de fin de module pour une app de pointage a laquelle on a des utilsateurs , des medecins , des services, des pointages et les des disponibilités.

Il a été réalisé avec Express, MongoDB et Swagger pour documenter les APIs.

## Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre machine :

- Node.js (version 16.18.1)
- MongoDB (version 5.0.7)
- MongoDB Compass (version 1.38.2)

## Installation

1. Clonez ce dépôt sur votre machine :

   ```bash
   git clone <https://github.com/Devdiop221/appointment-app>
   ```

2. Accédez au répertoire du projet :

   ```bash
   cd appointment-app
   ```

3. Installez les dépendances du projet :

   ```bash
   npm install
   ```


5. Créer une base de données avec MongoDB Compass avec comme nom :

   ```bash
   gestion_sante
   ```

6. Démarrez le serveur de développement :

   ```bash
   npm start
   ```

   Le serveur sera accessible à l'adresse `http://localhost:3000`.

## Documentation des APIs avec Swagger

Swagger est utilisé pour documenter les APIs de ce projet. Vous pouvez accéder à la documentation Swagger en ouvrant votre navigateur à l'adresse `http://localhost:3000/api-docs`.

## Structure du projet

La structure du projet est organisée comme suit :

```
├── controllers/      # Contrôleurs des routes
├── models/           # Modèles de données
├── routes/           # Définition des routes
├── swagger/          # Fichiers de configuration Swagger
└── index.js         # Point d'entrée du serveur
```

## Contribuer

Toute contribution à ce projet est la bienvenue ! Si vous souhaitez apporter des améliorations, veuillez ouvrir une pull request.

## Auteurs

- Mouhamed DIOP

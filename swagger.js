const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API Documentation",
    version: "1.0.0",
    description: "Documentation de l'API",
  },
  servers: [
    {
      url: "http://localhost:3000", // Remplacez par l'URL de votre serveur
      description: "Serveur local",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./index.js"], // Remplacez par le chemin vers vos fichiers de routes
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;

require('dotenv').config();
const path = require('path');

const {pathCategories, schemaCategories} = require('./pathSchemaCategories');

const swaggerSetup =  { 
  definition :{
    openapi: "3.0.0",
    info: {
      title: "Documentation Group 227 API ",
      version: "1.0.0",
    },
    servers: [
      {
        url: process.env.SERVER_SWAGGER,
        description: "Local dev"
      },
    ],
    tags : ["Category"],
    paths: pathCategories,
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          in: "header"
        },
      },
        schemas: schemaCategories,
    },
  },
  apis: [
    `${path.join(__dirname, "./routes/*.js")}`
  ]
}

module.exports = swaggerSetup;
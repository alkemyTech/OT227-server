require('dotenv').config();
const path = require('path');

const { pathCategories, schemaCategories, pathCategoriesId } = require('./pathSchemaCategories');
const { schemaNews, pathNewsId, pathNews } = require('./pathSchemaNews');

const swaggerSetup = {
  definition: {
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
    tags: ["Category", "New"],
    paths: {
      "/categories" : pathCategories,
      "/categories/{id}" : pathCategoriesId,
      "/new" : pathNews,
      "/new/{id}" : pathNewsId
    },

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          in: "header"
        },
      },
      schemas: {
        category: schemaCategories,
        news: schemaNews
      },
    },
  },
  apis: [
    `${path.join(__dirname, "./routes/*.js")}`
  ]
}

module.exports = swaggerSetup;
const pathCategories = {
    "/categories":{
      get: {
        tags: ["Category"],
        summary: "Get all categories",
        responses: {
          200: {
            description: "get all categories"
          },
          500: {
            description: "Internal server error"
          }
        },
        security: [
          {
            bearerAuth: []
          }
        ]
      },
      post: {
        tags: ["Category"],
        summary: "Create a new category",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                "$ref": "#/components/schemas/category"
              }
            }
          }
        },
        responses: {
          201: {
            description: "New category was created"
          },
          500: {
            description: "Internal server error"
          }
        }
      }
    },
    "/categories/{id}": {
      get: {
        tags: ["Category"],
        summary: "Get category by id",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Category ID",
            required: true,
            schema: {
              type: "number"
            }
          }
        ],
        responses: {
          200: {
            description: "get category by id"
          },
          404: {
            description: "Category not found"
          },
          500: {
            description: "Internal server error"
          }
        },
        security: [
          {
            bearerAuth: []
          }
        ]
      },
      put: {
        tags: ["Category"],
        summary: "Update a category",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                "$ref": "#/components/schemas/category"
              }
            }
          }
        },
        responses: {
          200: {
            description: "Category was updated by ID"
          },
          404: {
            description: "Category not found"
          },
          500: {
            description: "Internal server error"
          }
        },
        security: [
          {
            bearerAuth: []
          }
        ]
      },
      delete: {
        tags: ["Category"],
        summary: "Delete category by id",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Category ID",
            required: true,
            schema: {
              type: "number"
            }
          }
        ],
        responses: {
          200: {
            description: "Delete category by id"
          },
          404: {
            description: "Category not found"
          },
          500: {
            description: "Internal server error"
          }
        },
        security: [
          {
            bearerAuth: []
          }
        ]
      }
    }
}

const schemaCategories = {
    category: {
        type: "object",
        required: ["name"],
        properties: {
       id: {
         type: "number",
         description: "Autogenerate in the database"
       },
       name: {
          type: "string",
          description: "Name of category"
       },
       image: {
          type: "string",
          description: "Image of category"
       },  
        description: {
          type: "string",
          description: "Description of category"
        }
      },
       example: {
          name: "Category expample",
          image: "CategoryExpample.png",
          description: "Description category expample"
      },
    }
}

module.exports = { pathCategories, schemaCategories };
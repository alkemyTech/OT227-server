const schemaNews = {
    type: "object",
    required: ["name", "content", "image", "categoryId"],
    properties: {
   id: {
     type: "number",
     description: "Autogenerate in the database"
   },
   name: {
      type: "string",
      description: "Name of the new"
   },
   image: {
      type: "string",
      description: "Image of the new"
   },  
   content: {
      type: "string",
      description: "Content of the new"
    },
   categoryId : {
    type: "integer",
    description: "Id of the category the new belongs to"
   },
  },
   example: {
      name: "New example",
      image: "NewExample.png",
      content: "Content new example",
      categoryId: 1
  },
}

const pathNews = {
  get: {
    tags: ["New"],
    summary: "Get all news",
    responses: {
      200: {
        description: "get all news"
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
    tags: ["New"],
    summary: "Create a new New",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            "$ref": "#/components/schemas/news"
          }
        }
      }
    },
    responses: {
      201: {
        description: "New New was created"
      },
      500: {
        description: "Internal server error"
      }
    }
  }
}

const pathNewsId = {
  get: {
    tags: ["New"],
    summary: "Get new by id",
    parameters: [
      {
        name: "id",
        in: "path",
        description: "New ID",
        required: true,
        schema: {
          type: "number"
        }
      }
    ],
    responses: {
      200: {
        description: "Get new by id"
      },
      404: {
        description: "New not found"
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
    tags: ["New"],
    summary: "Delete new by id",
    parameters: [
      {
        name: "id",
        in: "path",
        description: "New ID",
        required: true,
        schema: {
          type: "number"
        }
      }
    ],
    responses: {
      200: {
        description: "Delete new by id"
      },
      404: {
        description: "New not found"
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
    tags: ["New"],
    summary: "Update new by id",
    parameters: [
      {
        name: "id",
        in: "path",
        description: "New ID",
        required: true,
        schema: {
          type: "number"
        }
      },
      {
        name: "name",
        in : "body",
        description: "New name",
        required: true,
        schema:{
          type: "string"
        }
      },
      {
        name: "image",
        in : "body",
        description: "New image",
        required: true,
        schema:{
          type: "string"
        }
      },
      {
        name: "content",
        in : "body",
        description: "New content",
        required: true,
        schema:{
          type: "string"
        }
      },
      {
        name: "categoryId",
        in : "body",
        description: "New categoryId",
        required: true,
        schema:{
          type: "number"
        }
      }
    ],
    responses: {
      200: {
        description: "Update new by id"
      },
      404: {
        description: "New not found"
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
  
}

module.exports = { schemaNews, pathNewsId, pathNews };
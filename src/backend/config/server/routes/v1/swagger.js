import swaggerJSDoc from "swagger-jsdoc";
import SwaggerUi from "swagger-ui-express";

const documentation = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Instant message",
            contact: {
                "email": "ysmaprogramming@gmail.com"
            },
            version: "1.0.0"
        }
    },
    apis: ["./src/backend/config/server/routes/v1/user/user-router.js",
        "./src/backend/user/domain/entities/user-entity.js",
        "./src/backend/message/domain/entities/message-entity.js",
        "./src/backend/config/server/routes/v1/message/message-router.js"
    ]
}


const swaggerSpec = swaggerJSDoc(documentation)

export function swaggerDocs(app) {
    app.use("/api/v1/docs", SwaggerUi.serve, SwaggerUi.setup(swaggerSpec))
    app.get("/api/v1/docs.json", (req, res) => {
        res.json(swaggerSpec)
    })
} 
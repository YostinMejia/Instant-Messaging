/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id: 
 *           type: string
 *           description: The id is assigned by the entity responsible for storing the data.
 *           example: 65c1627b7682ba00c96af0e3
 *         name:
 *           type: string
 *           description: The name of the user.
 *           example: John Doe
 *         email:
 *           type: string
 *           description: The email address of the user.
 *           example: john@example.com
 *         password:
 *           type: string
 *           description: The password of the user.
 *           example: password123
 *         usersBlocked:
 *           type: array
 *           items:
 *             type: string
 *           description: An array of user IDs that are blocked by this user.
 *           example: ["userId1", "userId2"]
 *         createdAt:
 *           type: string
 *           format: date
 *           description: date whe the user was created  
 *           example: 2024-02-05T22:30:19.053+00:00
 *       required:
 *         - name
 *         - email
 *         - password
 *       example: 
 *         id: 65c1627b7682ba00c96af0e3
 *         name: John Doe
 *         email: john@example.com
 *         password: password123
 *         usersBlocked: [43c1627b7682ba00c96af0e3]
 *         createdAt: 2024-02-05T22:30:19.053+00:00
 *     Login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: The email address of the user.
 *           example: john@example.com
 *         password:
 *           type: string
 *           description: The password of the user.
 *           example: password123      
 *        
 */

export class User {
    constructor(name, email, password) {
        if (!name || !email || !password) {
            throw new Error("Name, email, and password must be provided.")
        }

        this.id = null
        this.name = name
        this.email = email
        this.password = password
        this.usersBlocked = []
        this.createdAt = new Date()

    }

}

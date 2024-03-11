import { Router } from "express";

import { asyncTryCatchWrapper } from "../../../../../shared/application/async-trycatch-wrapper.js";
import { UserController } from "../../../../../user/infrastucture/controllers/user-controller.js";
import { UserMongodbRepository } from "../../../../../user/infrastucture/repositories/user-mongodb-repository.js";
import { AuthJwtRepository } from "../../../../../user/infrastucture/repositories/auth-jwt-repository.js";
import { authJwtMiddleware } from "../../../../../user/infrastucture/middlewares/auth-jwt-middleware.js";
export const userRouter = Router()

const userHandler = new UserController(new UserMongodbRepository(), new AuthJwtRepository())

/**
 * @openapi
 * /login:
 *   post:
 *     summary: Log in the user
 *     tags:
 *       - Log in
 * 
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *            schema:
 *                $ref: "#/components/schemas/Login"
 *     responses:
 *       200:
 *         description: User log in succesfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: bool
 *                   example: true
 *                 response:
 *                    type: object
 *                    properties:
 *                      token:
 *                        type: string
 *                        description: User token
 *                        format: token
 *                        example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
 * 
 */

userRouter.post("/login",
    await asyncTryCatchWrapper(userHandler.logIn.bind(userHandler)))

/**
 * @openapi
 * /register:
 *   post:
 *     summary: Create a new user
 *     tags: 
 *       - register
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               $ref: "#/components/schemas/User"
 *     responses:
 *       200:
 *         description: New user created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  success: 
 *                    type: bool 
 *                    example: true
 *                  response:
 *                    type: object
 *                    properties:
 *                      token:             
 *                        type: string
 *                        description: User token
 *                        format: token
 *                        example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
 * 
 *      
 *          
 *                       
 */

userRouter.post("/register",
    await asyncTryCatchWrapper(userHandler.register.bind(userHandler)))

/**
 * @openapi
 * /blockuser:
 *   post:
 *     summary: Block a user
 *     tags: 
 *       - Block a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idUserToBlock:
 *                 type: string 
 *                 example: 65c1627b7682ba00c96af0e3
 *             required:
 *               - idUserToBlock
 *     responses:
 *        200:
 *          content:
 *            application/json:
 *                schema: 
 *                  type: object
 *                  properties:
 *                    success: 
 *                      type: boolean
 *                      example: true
 *                    usersBlocked:
 *                      type: array
 *                      items:
 *                        type: string
 *                      example: ["userId", "userId"]
 *              
 */

userRouter.post("/blockuser",
    await asyncTryCatchWrapper(authJwtMiddleware),
    await asyncTryCatchWrapper(userHandler.blockUser.bind(userHandler)))


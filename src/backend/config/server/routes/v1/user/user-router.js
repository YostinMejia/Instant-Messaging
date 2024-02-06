import { Router } from "express";

import { asyncTryCatchWrapper } from "../../../../../shared/application/async-trycatch-wrapper.js";
import { UserController } from "../../../../../user/infrastucture/controllers/user-controller.js";
import { UserMongodbRepository } from "../../../../../user/infrastucture/repositories/user-mongodb-repository.js";
import { AuthJwtRepository } from "../../../../../user/infrastucture/repositories/auth-jwt-repository.js";
import { authJwtMiddleware } from "../../../../../user/infrastucture/middlewares/auth-jwt-middleware.js";
export const userRouter = Router()

const userHandler = new UserController(new UserMongodbRepository(), new AuthJwtRepository())

userRouter.post("/login",
    await asyncTryCatchWrapper(userHandler.logIn.bind(userHandler)))
userRouter.post("/register",
    await asyncTryCatchWrapper(userHandler.register.bind(userHandler)))
userRouter.post("/blockuser",
    await asyncTryCatchWrapper(authJwtMiddleware),
    await asyncTryCatchWrapper(userHandler.blockUser.bind(userHandler)))
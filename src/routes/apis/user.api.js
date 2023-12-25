import userController from '../../controllers/user.controller';
// import { userMiddleware } from '../../middlewares'

import express from "express";
const Router = express.Router();

// Router.post("/token-decode/:token", userMiddleware.tokenValidate, userController.tokenDecode)
Router.post("/", userController.login)

export default Router;
import userController from '../../controllers/user.controller';
import express from "express";
const Router = express.Router();

Router.post("/login", userController.login)

export default Router;
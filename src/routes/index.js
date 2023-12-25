import express from 'express'
const Router = express.Router();
import userApi from './apis/user.api'
import taskApi from './apis/task.api'

Router.use("/users", userApi)
Router.use("/todo", taskApi)
export default Router
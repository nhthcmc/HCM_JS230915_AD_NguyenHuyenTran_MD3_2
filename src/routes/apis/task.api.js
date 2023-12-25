import express from 'express'
const Router = express.Router()
import taskController from '../../controllers/task.controller'

Router.get('/todo', taskController.findAll)
Router.post('/todo', taskController.create)
Router.patch('/todo/:id', taskController.update)
Router.delete('/todo/:id', taskController.delete)
export default Router
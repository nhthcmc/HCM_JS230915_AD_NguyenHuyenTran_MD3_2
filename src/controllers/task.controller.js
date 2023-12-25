import taskModel from "../models/task.model";

export default {
    create: async (req, res) => {
        try {
            const { status, message, data } = await taskModel.create(req.body);
            if (status) {
                return res.status(201).json({
                    message,
                    data
                })
            } else {
                throw {
                    message: "Error!"
                }
            }
        } catch (err) {
            console.log('err', err);
            return res.status(500).json({
                message: err.message || "Internal Server Error",
                data
            })
        }
    },
    findAll: async (req, res) => {
        try {
            const { status, message, data } = await taskModel.findAll();
            if (status) {
                return res.status(200).json({
                    message,
                    data
                });
            } else {
                throw {
                    message: "Error!"
                };
            }
        } catch (err) {
            console.log('err', err);
            return res.status(500).json({
                message: err.message || "Internal Server Error",
                data: null
            });
        }
    },
    update: async (req, res) => {
        try {
            const { status, message, data } = await taskModel.update(req.params.id, req.body);
            if (status) {
                return res.status(200).json({
                    message,
                    data
                })
            } else {
                throw {
                    message: "Task not found!"
                }
            }
        } catch (err) {
            console.log('err', err);
            return res.status(500).json({
                message: err.message || "Internal Server Error",
                data
            })
        }
    },
    delete: async (req, res) => {
        try {
            const { status, message, data } = await taskModel.delete(req.params.id);
            if (status) {
                return res.status(200).json({
                    message,
                    data
                })
            } else {
                throw {
                    message: "Task not found!"
                }
            }
        } catch (err) {
            return res.status(500).json({
                message: err.message || "Internal Server Error",
                data
            })
        }
    }
}
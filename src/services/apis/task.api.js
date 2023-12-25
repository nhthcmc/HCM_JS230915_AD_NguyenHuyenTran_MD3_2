import axios from "axios";

export default {
    findAll: async () => {
        return await axios.get(`http://127.0.0.1:3000/todo`)
    },
    create: async (data) => {
        return await axios.post(`http://127.0.0.1:3000/todo`, data)
    },
    update: async (taskId, data) => {
        return await axios.patch(`http://127.0.0.1:3000/todo/${taskId}`, data)
    },
    delete: async (taskId) => {
        return await axios.delete(`http://127.0.0.1:3000/todo/${taskId}`)
    }
}
import axios from "axios";

export default {
    login: async function (data) {
        return await axios.post(`http://127.0.0.1:3000/user/login`, data);
    },
}
import userModel from "../models/user.model"
// import { jwtService, hashService } from '../services'
// import path from "path";
// import ejs from 'ejs';
// import axios from 'axios';

export default {
    login: async function (req, res) {
        const ip = req.ip;
        let { data } = await userModel.findUser(req.body.username);

        if (!data) {
            return res.status(500).json({
                message: "User not found"
            })
        }

        // if (!(await hashService.verifyHash(req.body.password, data.password))) {
        //     return res.status(500).json({
        //         message: "Incorrect Password"
        //     })
        // }
        return res.status(200).json({
            message: "Login successful!",
            // token: jwtService.createToken(data, "1d")
        })
    },
}
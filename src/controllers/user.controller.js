import userModel from "../models/user.model"

export default {
    login: async (req, res) => {
        let user = await userModel.findUser(req.body.username);
        if (!user) {
            return res.status(500).json({
                message: "User not found"
            })
        } else {
            return res.status(200).json({
                message: "Login successful!",
                data: user
            })
        }
    },
}
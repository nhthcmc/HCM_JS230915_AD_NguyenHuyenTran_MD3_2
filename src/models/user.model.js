import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default {
    findUser: async (userName) => {
        try {
            let user = await prisma.users.findFirst({
                where: {
                    userName: userName,
                },
            })
            return {
                status: true,
                data: user
            }

        } catch (err) {
            console.log(err);
            return {
                status: false,
                message: "Error",
                data: null
            }
        }
    }
}
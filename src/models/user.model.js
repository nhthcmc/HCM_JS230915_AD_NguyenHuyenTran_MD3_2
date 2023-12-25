import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default {
    findUser: async function (userName) {
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
            // let message = null;
            // return {
            //     status: false,
            //     message: message ? message : "modelError",
            //     data: null
            // }
        }
    }
}
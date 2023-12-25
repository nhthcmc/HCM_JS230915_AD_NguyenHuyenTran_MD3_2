import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const taskModel = {
    create: async (name) => {
        try {
            const task = await prisma.task.create({
                data: {
                    name: name,
                },
            })
            return {
                status: true,
                message: "Created successfully!",
                data: task
            }
        } catch (err) {
            console.log('err', err)
            return {
                status: false,
                message: "Model Error",
                data: null
            }
        }
    },
    findAll: async () => {
        try {
            let task = await prisma.task.findMany()
            return {
                status: true,
                message: "Found all tasks!",
                data: task
            }
        } catch (err) {
            console.log('Error:', err);
            return {
                status: false,
                message: "Model Error",
                data: null
            }
        }
    },
    update: async (id, name) => {
        try {
            let task = await prisma.task.update({
                where: {
                    id: Number(id)
                },
                data: {
                    name: name,
                }
            })
            return {
                status: true,
                message: "Updated successfully!",
                data: task
            }
        } catch (err) {
            console.log(err);
        }
    },
    delete: async (id) => {
        try {
            let task = await prisma.task.delete({
                where: {
                    id: id
                }
            })
            return {
                status: true,
                message: "Deleted successfully!",
                data: task
            }
        } catch (err) {
            console.log(err);
        }
    }
}
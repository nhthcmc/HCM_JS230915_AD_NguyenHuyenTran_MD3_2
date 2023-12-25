import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const taskModel = {
    create: async (taskData) => {
        let task = await prisma.task.create({
            data: {
                ...taskData
            }
        })
        return {
            status: true,
            message: "Created successfully!",
            data: task
        }

    },
    findAll: async () => {
        let data = await prisma.task.findMany()
        return {
            status: true,
            message: "Found all tasks!",
            data
        }

    },
    update: async (id, taskData) => {
        let data = await prisma.task.update({
            where: {
                id: Number(id)
            },
            data: {
                ...taskData
            }
        })
        return {
            status: true,
            message: "Updated successfully!",
            data
        }
    },
    delete: async (id) => {
        let data = await prisma.task.delete({
            where: {
                id: Number(id)
            }
        })
        return {
            status: true,
            message: "Deleted successfully!",
            data
        }
    }

}
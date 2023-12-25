import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import userList from './user'

(async () => {
    try {
        await prisma.members.createMany({
            data: [
                ...userList
            ]
        })
    } catch (err) {
        console.log("err", err)
    }
})()


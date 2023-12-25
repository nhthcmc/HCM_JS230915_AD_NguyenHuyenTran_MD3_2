import { UserRole } from '@prisma/client';

export default [
    {
        userName: "admin",
        password: "123",
        role: UserRole.admin,
    },
    {
        userName: "user",
        password: "user",
        role: UserRole.user,
    }
]
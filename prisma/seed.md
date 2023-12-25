import { UserRole } from '@prisma/client';

export default [
    {
        userName: "admin",
        password: "admin",
        role: UserRole.admin,
    },
    {
        userName: "user",
        password: "user",
        role: UserRole.user,
    }
]

"prisma": {
    "seed": "ts-node prisma/seed.ts"
  }
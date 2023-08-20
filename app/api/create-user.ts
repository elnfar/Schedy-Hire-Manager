'use server'

import { prisma } from '@/lib/prisma'
import bcrypt from 'bcrypt'

export default async function createUser(data:FormData) {
    const email = data.get('email') as string
    const password = data.get('password') as string


    const hashPassword = await bcrypt.hash(password,12)

    await prisma.user.create({
        data: {
            email,
            password:hashPassword
        }
    })

}
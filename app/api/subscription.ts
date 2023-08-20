'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"


export default async function subsribe(data:FormData) {
     await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds

    const email = data.get('email') as string

       await prisma.subsription.create({
        
            data: {
                email
            }
        })
        revalidatePath('/get-demo')
}
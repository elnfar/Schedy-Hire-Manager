import bcrypt from 'bcrypt'
import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from '@/lib/prisma'
import { Adapter } from 'next-auth/adapters';




export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        CredentialsProvider({
            name:'credentials',
            credentials: {
                email: {label:"email", type:"email"},
                password: {label:"password",type:"password"}
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials.password) {
                    throw new Error(" Invalid Credentials ")
                }


                const user = await prisma.user.findUnique({
                    where: {
                        email:credentials.email
                    }
                })

                if (!user || !user?.password) {
                    throw new Error('Invalid credentials');
                }


            const isCorrectPassword = await bcrypt.compare(
                credentials.password,
                user.password
            )

            if (!isCorrectPassword) {
                throw new Error('Invalid credentials');
              }
              
              return user;

        }
         
        })
    ],
    pages: {
        signIn:'/',
    },
    session: {
        strategy:'jwt'
    },

    secret: process.env.NEXTAUTH_SECRET

}

const handler  = NextAuth(authOptions);
export { handler as GET, handler as POST }
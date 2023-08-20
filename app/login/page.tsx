import React from 'react'
import LoginClient from './login-client'
import currentSessionUser from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function Login() {

  const user = await currentSessionUser()

  if (user) {
    redirect('/')
  }
  return (
    <div className='flex items-center justify-center h-screen'>
        <LoginClient/>
    </div>
  )
}

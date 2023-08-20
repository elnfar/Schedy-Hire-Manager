'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import createUser from '../api/create-user'
import { signIn } from "next-auth/react"


type initialStateType = {
  email:string,
  password:string
}

const initialState:initialStateType = {
  email:'',
  password:''
}

export default function LoginClient() {

  const [state,setState] = useState(initialState)
  const [loading,setLoading] = useState(false)



  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
      setState({...state,[e.target.name]:e.target.value})
  }

  const signInFunc = (event:FormEvent) => {
    event.preventDefault();

    setLoading(true)

    signIn('credentials', {
      ...state,
      redirect:false
  })
  .then((callback) => {
    if(callback?.ok) {
      console.log('success');
      
    }
    
    if(callback?.error) {
        throw new Error('Wrong Credentials')
    }
    }).catch((err) => {
        throw new Error(err)
    }).finally(() => {
      setLoading(false)
    })
  }

  return (
    <form action={createUser} className='w-[600px] flex flex-col gap-4 border-2 p-6'>
      <h1 className='text-[2rem] border-b-2 py-4'>Sign in/up</h1>

        <div className='space-y-1'>
        <Label className='text-[1.1rem]' htmlFor='email'>Email</Label>
        <Input type='email' className='py-6' onChange={handleChange} placeholder='value@gmail.com' value={state.email} name='email' id='email'/>
        </div>

        <div className='space-y-1'>
        <Label className='text-[1.1rem]' htmlFor='password'>Password</Label>
        <Input type='password' onChange={handleChange} className=' py-6' placeholder='password' value={state.password} name='password' id='password'/>
        </div>
   

      <div className='flex items-center justify-center gap-4'>
        <Button type='submit'>Register</Button>
        <Button disabled={loading} type='button' onClick={signInFunc}>Log in</Button>
      </div>
   

    </form>
  )
}

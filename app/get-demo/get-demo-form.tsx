'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { ChangeEvent, experimental_useOptimistic, useRef, useState } from 'react'
import subsribe from '../api/subscription'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import FormButton from '@/components/form-button'


type initialStateType = {
    email:string,
  }
  
  const initialState:initialStateType = {
    email:'',
  }

  type Message = {
    message: string;
    sending: boolean;
  };
export default function GetDemoForm() {
    const [state,setState] = useState(initialState)
    const [messages, setMessages] = useState<Message[]>([]);
    const [successMessage,setSuccessMessage] = useState('Thank you. We will get in touch with you very soon.')
    const [showMessage,setShowMessage] = useState(false)

    const formStatus = useFormStatus()

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setState({...state,[e.target.name]:e.target.value})
    }
    {console.log(formStatus.pending)}

    
  return (
    <form className='md:w-[600px] sm:w-[500px] w-[350px]' action={async (formData) => {

        await subsribe(formData);
        setShowMessage(true);
        setState({email:""})
    }}> 

        <div className='flex bg-white items-center'>
        <input value={state.email} className=' outline-none border-none w-full px-4' required placeholder='example@dev.com' onChange={handleChange} name='email' id='email'/>
         <FormButton label='Request'/>
        </div>


    {showMessage === true && <p className='pt-6 text-[1.2rem] text-white font-bold font-sans'>{successMessage}</p>}

    </form>
  )
}

import React from 'react'
import { Button } from './ui/button'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'



type Props = {
    label:string
}

export default function FormButton({label}:Props) {
    
    const {pending} = useFormStatus();

  return (
    <Button disabled={pending} className='p-8 bg-blue-400 text-white rounded-none font-bold' type='submit'> {label}</Button>
  )
}

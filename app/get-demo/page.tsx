import { Input } from '@/components/ui/input'
import React from 'react'
import GetDemoForm from './get-demo-form'

export default function page() {
  return (
    <div className='h-screen bg-[#16182a] flex justify-center items-center'>
        <div className='flex text-center items-center container gap-8 justify-center flex-col px-16 sm:px-6'>
            <div className='text-white md:w-[800px] w-[360px]'>
                <h1 className='md:text-[3rem] lg:text-[5.3rem] font-bold uppercase text-[1.4rem] sm:text-[3rem] sm:py-2 py-8 leading-[1]'>Thank you for checking up!</h1>
                <span className='md:text-[1.4rem] text-[.9rem] text-neutral-500'>Please enter your email and we we'll be in touch with you.</span>
            </div>


            <GetDemoForm/>
        </div>
    </div>
  )
}

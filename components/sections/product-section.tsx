import { Hourglass, Kanban, Pin, icons } from 'lucide-react'
import React from 'react'
import Icon from '../icon'



const products = [
    {
        id:1,
        icon:<Kanban size={44}/>,
        header:'Team Management',
        description:'Manage your team, create employyes, assign projects, teams, salaries and more.'
    },
    {
        id:2,
        icon:<Pin size={40}/>,
        header:'Employee Tracker',
        description:'Track your employees daily schedule or create/assign a schedule. Follow the time frame, which user works on which product.'
    },
    {
        id:3,
        icon:<Hourglass size={40} />,
        header:'Meeting Scheduler',
        description:'Schedule meetings along with your team or to external. Collaborate with other people and send notifications on time.'
    },
]

export default function ProductSection() {
  return (
    <section>
        <div className='flex  flex-col text-center py-6'>
        <h1 className='md:text-[3rem] text-[1rem] font-extrabold'>Products to help you with every part of your business</h1>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-2 place-content-center px-6 justify-center py-12'>
            {products.map((item) => (
                <CartProduct key={item.id} {...item}/>
            ))}
        </div>
        </div>

    </section>
  )
}



type CartProductProps = {
    header:string,
    description:string
    icon:any
}

const CartProduct = ({header,description,icon}:CartProductProps) => {
    return (
        <div className='text-start md:w-[400px] mx-auto space-y-4 p-6 shadow-2xl rounded-lg'>
            <span className=' text-blue-500'>{icon}</span>
            <h1 className='text-[1.3rem] font-bold'>{header}</h1>
            <p>{description}</p>
        </div>
    )
}
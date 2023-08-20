'use client'

import Link from "next/link";
import { Button } from "../ui/button";
import { useState, useEffect } from 'react';
import { MenuIcon, X } from "lucide-react";


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            if (position > 50) {  // You can adjust this value as per your needs
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleSidebar = () => {
        setIsOpen(prevState => !prevState);
    }

  return (
    <header className={`w-full fixed top-0 transition-all duration-500 text-white py-5  z-[99999999] ${isScrolled ? 'bg-white text-black shadow-2xl' : ''}`}>
        <div className="px-4 md:px-6 flex justify-between items-center gap-12 ">
        <Link href='/' className="text-[2rem] cursor-pointer font-extrabold text-blue-500">Schedgy</Link>


        <Button variant="ghost" className="md:hidden" onClick={toggleSidebar}><MenuIcon size={42}/></Button>
     

     {isOpen && (
            <nav className="flex flex-col md:flex-row justify-center items-center fixed right-0 top-0 bottom-0 bg-zinc-700/70 backdrop-blur-sm filter left-[40%]">

            <Button type="button" onClick={toggleSidebar} variant="ghost" className="absolute left-2 top-2 text-white"><X/></Button>

            <ul className={`flex md:flex-row flex-col md:text-white gap-8 px-6 md:px-0 text-[1.2rem]  `}>
                <li><Link href='/'>Product</Link></li>
                <li><Link href='/'>Resources</Link></li>
                <li><Link href='/'>Pricing</Link></li>
            </ul>
        </nav>
     )}

            <nav className="hidden md:block">
                <ul className="hidden md:flex md:gap-4  md:items-center md:space-x-6">
                        <li><Link href='/'>Product</Link></li>
                        <li><Link href='/'>Resources</Link></li>
                        <li><Link href='/'>Pricing</Link></li>
                    </ul>
            </nav>
               


        <div className="ml-auto space-x-6 hidden md:flex">
            <Button asChild variant="secondary" className=" border-blue-500 border-2"><Link href='/get-demo'>Get Demo</Link></Button>
            <Button asChild variant="secondary" className={` bg-blue-500 text-white hover:bg-blue-300`}><Link href='/'>Contact</Link></Button>
        </div>


        </div>
    </header>
  )
}

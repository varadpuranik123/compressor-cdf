"use client";
import { Logo } from "./logo"
import { Monda } from 'next/font/google'

const monda = Monda({
    weight:"400",
    subsets: ['latin'],
    variable: '--font-monda',
})


export const Navbar = () => {
    return(
        <div className=" z-10 w-full fixed flex justify-between items-center bg-[#fffff1] px-16 py-4 ${monda.variable}">
            <div className="w-full">
                <Logo />
            </div>
            <div className="w-full flex space-x-8 font-medium justify-end">
                <button>Home</button>
                <button>About Us</button>
                <button>Help & Support</button>
            </div>
        </div>
    )
}
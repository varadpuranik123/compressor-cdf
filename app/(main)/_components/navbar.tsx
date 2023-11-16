"use client";
import { Logo } from "./logo"

export const Navbar = () => {
    return(
        <div className="flex justify-between items-center bg-[#fffff1] px-12 py-4">
            <div>
                <Logo />
            </div>
            <div>
                This is a navbar
            </div>
        </div>
    )
}
"use client";

import Image from "next/image";

export const Footer = () => {
    return (
        <div className="bg-[#0f1314] flex justify-between w-full h-1/2 p-16 px-48 ">
            <div className="logo ">
                <Image
                src="/darklogo.svg"
                alt="Logo"
                height="110"
                width="110"
                />
            </div>
            <div className="quick-links space-y-2">
                <p className=" text-lg font-semibold text-[#eeeeee]">Navigation</p>
                <p className=" text-[#777777] hover:text-[#fffff9] duration-200">Home</p>
                <p className=" text-[#777777] hover:text-[#fffff9] duration-200">About Us</p>
                <p className=" text-[#777777] hover:text-[#fffff9] duration-200">Help & Support</p>
            </div>
            <div className="social space-y-2">
                <p className="text-lg font-semibold text-[#eeeeee]">Social</p>
                <p className=" text-[#777777] hover:text-[#fffff9] duration-200">Facebook</p>
                <p className=" text-[#777777] hover:text-[#fffff9] duration-200">Instagram</p>
                <p className=" text-[#777777] hover:text-[#fffff9] duration-200">X</p>
                <p className=" text-[#777777] hover:text-[#fffff9] duration-200">Linkedin</p>
            </div>
        </div>
    )
}
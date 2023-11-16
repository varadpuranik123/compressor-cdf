"use client";

import Image from "next/image";
import Link from "next/link";

export const Banner = () => {
    return(
        <div className="w-[100%] h-screen flex items-center justify-start">
            <div className="flex flex-col items-start justify-start space-y-4 max-w-7xl pl-20 pr-28">
                <h2 className="text-5xl">
                    <span className="font-semibold">COMPRESS</span> YOUR <span className="font-semibold">PDFS</span>
                    <p> WITH EASE</p>
                </h2>
                <p className="text-2xl max-w-2xl opacity-70">
                    EFFORTLESS PDF COMPRESSION FOR SMOOTHER DIGITAL WORKFLOWS
                </p>
                
                <Link href="/select"><button className="button-shadow font-semibold text-xl w-80 h-20 hover:bg-[#637CFF] duration-300 hover:text-[#fffff1] stroke border-[3px] rounded-xl border-[#333333] bg-[#fffff1] text-black">
                START COMPRESSING NOW!
                </button></Link>
            </div>
            <div className="w-[45%] flex justify-end pr-20">
                <Image 
                src="/pdfcom.svg"
                alt="pdf Com"
                height="350"
                width="350"
                />
            </div>
        </div>
    )
}
"use client";

export const DownloadBanner = () =>{
    return(
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-5xl font-bold">
                YOUR PDF IS READY TO DOWNLOAD
            </h2>
            <p className="pt-5 pb-20">
                THANKS FOR COMPRESSING USING CDF
            </p>

            <button
            className="button-shadow2 font-semibold text-4xl w-[600px] h-32 hover:bg-[#637CFF] duration-300 hover:text-[#fffff1] stroke border-2 rounded-xl border-black bg-[#fffff1] text-black">
                DOWNLOAD COMPRESSED PDF
            </button>
        </div>
    )
}
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export const Tools = () => {
    return (
        // <div className="w-full h-screen flex flex-col items-baseline justify-start pl-20">
        //     <div className="text-5xl">
        //         TOOLS
        //     </div>
        //     <div className="py-20">
        //         <Card className="bg-[#fffff1] w-96 h-54 flex flex-col">
        //             <CardHeader>
        //                 <CardTitle className="flex justify-between ">
        //                     OPTIMIZE PDFS
        //                     <Button className="bg-[#fffff1] text-black hover:text-white space-x-6 flex justify-end">
        //                         <Image 
        //                         src="optpdf.svg"
        //                         alt="optpdf"
        //                         height="25"
        //                         width="25"
        //                         />
        //                     </Button>
        //                 </CardTitle>
        //                 <CardDescription>
        //                     EFFORTLESS COMPRESSION
        //                 </CardDescription>
        //                 <CardContent>
        //                     Achieve maximum PDF quality while minimizing file size
        //                     <button className="button-shadow2 font-semibold text-sm w-80 h-[3.5rem] hover:bg-[#637CFF] duration-300 hover:text-[#fffff1] stroke border-2 rounded-xl border-black bg-[#fffff1] text-black">
        //                         COMPRESS PDF
        //                     </button> 
        //                 </CardContent>
        //             </CardHeader>
        //         </Card>
        //     </div>
        // </div>

        <div className="p-20 space-y-20">
            <div className=" text-5xl">TOOLS</div>
            <div className="wraper-class grid grid-cols-3 gap-0 justify-around  ">
                <div className=" card ">
                    <div className=" w-[420px] h-[200px] border-[3px] rounded-md border-r-[6px] border-black flex flex-col justify-center items-center p-4 ">
                        <div className=" w-full flex justify-between ">
                            <p className=" font-bold text-[28px]">OPTIMIZE PDFS</p>
                            <Image src="optpdf.svg" alt="optpdf" height="28" width="28" />
                        </div>
                        <div className="space-y-2">
                            <div className="space-y-1">
                                <p className="text-lg font-[600] opacity-75">EFFORTLESS COMPRESSION</p>
                                <p className="text-sm opacity-75">Achieve maximum PDF quality while minimizing file size.</p>
                            </div>
                            <div>
                                <button
                                    className="button-shadow2 font-semibold text-sm w-full h-[3.5rem] hover:bg-[#637CFF] duration-300 hover:text-[#fffff1] stroke border-2 rounded-xl border-black bg-[#fffff1] text-black">
                                    COMPRESS PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" card ">
                    <div className=" w-[420px] h-[200px] border-[3px] rounded-md border-r-[6px] border-black flex flex-col justify-center items-center p-4 ">
                        <div className=" w-full flex justify-between ">
                            <p className=" font-bold text-[28px]">OPTIMIZE PDFS</p>
                            <Image src="optpdf.svg" alt="optpdf" height="28" width="28" />
                        </div>
                        <div className="space-y-2">
                            <div className="space-y-1">
                                <p className="text-lg font-[600] opacity-75">EFFORTLESS COMPRESSION</p>
                                <p className="text-sm opacity-75">Achieve maximum PDF quality while minimizing file size.</p>
                            </div>
                            <div>
                                <button
                                    className="button-shadow2 font-semibold text-sm w-full h-[3.5rem] hover:bg-[#637CFF] duration-300 hover:text-[#fffff1] stroke border-2 rounded-xl border-black bg-[#fffff1] text-black">
                                    COMPRESS PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" card ">
                    <div className=" w-[420px] h-[200px] border-[3px] rounded-md border-r-[6px] border-black flex flex-col justify-center items-center p-4 ">
                        <div className=" w-full flex justify-between ">
                            <p className=" font-bold text-[28px]">OPTIMIZE PDFS</p>
                            <Image src="optpdf.svg" alt="optpdf" height="28" width="28" />
                        </div>
                        <div className="space-y-2">
                            <div className="space-y-1">
                                <p className="text-lg font-[600] opacity-75">EFFORTLESS COMPRESSION</p>
                                <p className="text-sm opacity-75">Achieve maximum PDF quality while minimizing file size.</p>
                            </div>
                            <div>
                                <button
                                    className="button-shadow2 font-semibold text-sm w-full h-[3.5rem] hover:bg-[#637CFF] duration-300 hover:text-[#fffff1] stroke border-2 rounded-xl border-black bg-[#fffff1] text-black">
                                    COMPRESS PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
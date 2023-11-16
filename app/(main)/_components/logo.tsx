"use client";

import Image from "next/image";

export const Logo = () => {
    return(
        <div>
            <Image
            src="/logo.svg"
            alt="Logo"
            height="110"
            width="110"
            />
        </div>

    )
}
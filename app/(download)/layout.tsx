"use client";

import { Footer } from "../(main)/_components/footer";
import { Navbar } from "../(main)/_components/navbar";

const DownloadLayout = ({
    children
}:{
    children: React.ReactNode;
}) => {
    return(
        <div>
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    )
}
export default DownloadLayout;
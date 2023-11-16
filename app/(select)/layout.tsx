"use client";

import { Navbar } from "../(main)/_components/navbar";

const MainLayout = ({
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
export default MainLayout;
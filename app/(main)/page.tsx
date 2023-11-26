import { Banner } from "./_components/banner";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";
import { Tools } from "./_components/tools";

export default function Home() {
    return(
        <div>
            <Navbar />
            <Banner />
            <Tools />
            <Footer />
        </div>
    )
}

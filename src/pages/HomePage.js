import NavBar from "../Components/NavBar"
import Hero from "../Components/Hero"
import Layanan from "../Components/Layanan"
import Pricing from "../Components/Pricing"
import FAQ from "../Components/FAQ"
import Banner from "../Components/Banner"
import Footer from "../Components/Footer"

const HomePage = () => {
    return (  
        <div>
            <NavBar />
            <Hero />
            <Layanan />
            <Pricing />
            <FAQ />
            <Banner />
            <Footer />
        </div>
    );
}
 
export default HomePage;
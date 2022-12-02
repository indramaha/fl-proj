import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Layanan from './Components/Layanan';
import Pricing from './Components/Pricing';
import ContactForm from './Components/Form';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';
import Banner from './Components/Banner';

function App() {
  return (
    <div>
      <NavBar/>
      <Hero />
      <Layanan />
      <Pricing />
      <ContactForm />
      <FAQ />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;

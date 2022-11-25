import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Layanan from './Components/Layanan';
import Pricing from './Components/Pricing';
import ContactForm from './Components/Form';

function App() {
  return (
    <div>
      <NavBar/>
      <Hero />
      <Layanan />
      <Pricing />
      <ContactForm />
    </div>
  );
}

export default App;

import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Layanan from './Components/Layanan';
import Pricing from './Components/Pricing';

function App() {
  return (
    <div>
      <NavBar/>
      <Hero />
      <Layanan />
      <Pricing />
    </div>
  );
}

export default App;

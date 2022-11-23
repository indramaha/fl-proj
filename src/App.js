import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Layanan from './Components/Layanan';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero />
      <Layanan />
    </div>
  );
}

export default App;

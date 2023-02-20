import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Course from './pages/Course';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path='/regis' element={<Course />} />
    </Routes>
  );
}

export default App;

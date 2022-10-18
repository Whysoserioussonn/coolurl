import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Zooanimals from './pages/Zooanimals';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/cats' element={<Catfacts/>}/>
        <Route path='/dogs' element={<Dogfacts/>}/>
        <Route path='/zooanimals' element={<Zooanimals/>}/>
      </Routes>
    </div>
  );
}

export default App;

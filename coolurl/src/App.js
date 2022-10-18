import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/cats'/>
        <Route path='/dogs'/>
        <Route path='/zooanimals'/>
      </Routes>
    </div>
  );
}

export default App;

import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './components/dashboard/Dashboard';
import Exercises from './components/exercise/Exercise';
import Food from './components/food/Food';
import Navbar from './components/navbar/Navbar';
import Goal from './components/goal/Goal';

function App() {
  return (
    <div className="App">
     <h1>Fitness Tracker App</h1>
     <Navbar/>
     <Routes>
       <Route path="/" element={<DashBoard />}></Route>
       <Route path="/exercise" element={<Exercises />}></Route>
       <Route path='/food' element={<Food/>}></Route>
       <Route path='/goal' element={<Goal/>}></Route>
       </Routes>
       <Link/>
    </div>
  );
}

export default App;

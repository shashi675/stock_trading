
import React, {useState} from 'react';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Waiting from './components/Waiting';
import ShowOrder from './components/ShowOrder';


function App() {

  const [stocks, setStocks] = useState([]);
  const [waiting, setWaiting] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className='w-11/12 mx-auto'>
    {waiting ? 
    <Waiting /> : 
    <Router>
      <Routes>
        <Route path='/' element={[<Home stocks={stocks} setStocks={setStocks} setWaiting={setWaiting} setError={setError} />]} />
        <Route path='/orderCreated' element={<ShowOrder error={error} stocks={stocks} />} />
      </Routes>
    </Router>
    }
    </div>
  );
}

export default App;

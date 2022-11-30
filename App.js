import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Home from './component/Home';
import Navbar from "./component/Navbar";

function App() {
  const value= useSelector(state=>state.custom.c)
  return (
    <div className="App">
        {/* <h1>This is app Component {value}</h1> */}
       <Home />
    </div>
  );
}

export default App;

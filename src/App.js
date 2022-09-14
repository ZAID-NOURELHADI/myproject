import React from 'react';
import './Styles/index.css';
import Navbar from './components/Navbar';

import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import Technologies from './Technologies';
import ErrorPage from './ErrorPage';
function App() {
  return (

    <div className="App white">
      
      
      <Router>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
           <Route path="/technologies" element={<Technologies />} />
           <Route path="/contact" element={<Contact />} />
           
           <Route path="/*" element={<ErrorPage />} />
      
        </Routes>
      </Router>
      {/* <Route exact path="/">  */}
      


    {/* </Route> */}
     {/* <Route exact path="/" component={Home} />  */}
     {/* <Route exact path="/technologies" component={Technologies} />   */}

    
    </div>
    
 
  );
}


export default App;

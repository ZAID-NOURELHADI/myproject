import React from 'react';
import './Styles/index.css';
import Footer from './components/Footer';
import Inflex from './components/Inflex202';


import CollectCompanies2 from './components/CollectCompanies2';
import ContactUs from './components/ContactUs';

function Contact() {
    return (
        <>
  <div style={{ backgroundImage: `url("./PNG/Groupe 18@2x.png")` }}>
  <div className='container '>
    <ContactUs/>
  </div>
  </div>

  <div className='container'>
    <Footer/>
  </div>
  <div > 
    <Inflex/>
  </div>
  </>
  
        
  
  
    );
}
export default Contact;
import React from 'react';
import './Styles/index.css';
import HeroSection from './components/HeroSection';
import CollectCompanies from './components/CollectCompanies';
import CollectCompanies2 from './components/CollectCompanies2';
import Service from './components/Service';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Inflex from './components/Inflex202';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
//const customId = "custom-id-yes";

function Home() {
  const toastId = React.useRef(null);

  const notify = () => {
    if(! toast.isActive(toastId.current)) {
      toastId.current = toast.error("check your Email!" , {position: toast.POSITION.TOP_RIGHT});
    }
    //toast.error('check your Email!', {position: toast.POSITION.TOP_RIGHT}, {toastId: customId})
  }
    return (
        <>
        <div style={{ backgroundImage: `url("./PNG/Groupe 17.png")` }}>
        <div className='container'>
          <HeroSection/>
        </div>
        </div>
  <div className='white'>
  <div className='container '>
  <CollectCompanies />
        </div>
  <div className='container '>
    <CollectCompanies2/>
  </div>
  <div className='container '>
    <Service/>
  </div>
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

  
        
  </div>
  </>
    );
}
export default Home;
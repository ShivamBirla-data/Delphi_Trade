import React from 'react';
import Hero from './Hero';
import Education from './Education';
import Awards from './Awards';
import Pricing from './Pricing';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function HomePage() {
      const navigate = useNavigate();

  useEffect(() => {
    const navEntries = performance.getEntriesByType("navigation");

    if (navEntries.length > 0 && navEntries[0].type === "reload") {
      navigate("/", { replace: true });
    }
  }, [navigate]);

    return ( 
       
    <>

            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />

            
    </>   
        
     );
}

export default HomePage;
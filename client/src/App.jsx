

import { useEffect } from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';

import { Navbar } from './components/NavBar/Navbar';
import AllRoutes from './Routes/AllRoutes';




function App() {

  







  
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");

      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });















  return (
    <div className="App">
      <Navbar/>


      <AllRoutes/>

  
      <Footer />
    </div>
  );
}

export default App;

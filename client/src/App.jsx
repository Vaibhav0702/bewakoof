// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Home/Navbar';
import { Routes, Route } from "react-router-dom"
import { Home } from './components/Home/Home';
import { Men } from './components/Home/Men'
import { Women } from './components/Home/Women';
import { MobileCover } from './components/Home/MobileCover';
import { Login } from './components/Home/Login';
import { Wishlist } from './components/Home/Wishlist';

import { Signup } from './components/Home/Signup';
import { Cart } from './components/Cart/Cart';
import { Footer } from './components/Footer/Footer'
import PrivateRoute from './components/PrivateRoute';
import Payment from './components/Cart/payment';

import Otp from './components/Cart/otp';

import Thanks from './components/Cart/thanks';
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
       
        {/* <Route path='/' element={<Home />}></Route> */}

        {/* <Route path='/Home/men' element={<Men />}></Route>

        <Route path='/Home/women' element={<Women />}></Route>

        <Route path='/Home/mobilecovers' element={<MobileCover />}></Route>

        <Route path='/Home/login' element={<Login />}></Route>

        <Route path='/Home/wishlist' element={<PrivateRoute><Wishlist /></PrivateRoute>}></Route>
      
        <Route path='/signup' element={<Signup />}></Route>

        <Route path='/Cart/cart' element={<PrivateRoute><Cart /></PrivateRoute>}></Route>

        <Route path='/Cart/payment' element={<Payment />}></Route>

        <Route path='/Cart/otp' element={<Otp />}></Route>

        <Route path='/Cart/thanks' element={<Thanks />}></Route>

        <Route path='/Home/footer' element={<Footer />}></Route> */}

      </Routes>
      <Footer />
    </div>
  );
}

export default App;

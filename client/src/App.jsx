
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import Home from './components/Home/Home';
import { Navbar } from './components/NavBar/Navbar';




function App() {
  return (
    <div className="App">
      <Navbar/>

    
      <Routes>
       
        <Route path='/' element={<Home />}></Route>

     

      </Routes>
      <Footer />
    </div>
  );
}

export default App;

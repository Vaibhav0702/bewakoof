
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import AssesoriesHome from './components/Home/AssesoriesHome';
import Home from './components/Home/Home';
import Menhome from './components/Home/Menhome';
import WomenHome from './components/Home/WomenHome';
import { Navbar } from './components/NavBar/Navbar';




function App() {
  return (
    <div className="App">
      <Navbar/>

    
      <Routes>
       
        <Route path='/' element={<Home />}></Route>

        <Route path='/men' element={<Menhome/>}></Route>

        <Route path='/women' element={<WomenHome/>}></Route>

        <Route path='/assesories' element={<AssesoriesHome/>}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;

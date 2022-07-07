

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import Menhome from '../components/Home/Menhome'
import WomenHome from '../components/Home/WomenHome'

import AssesoriesHome from "../components/Home/AssesoriesHome"
import Product from '../components/Products/Product'

const AllRoutes = () => {
  return (
    <>
    
    
      
    <Routes>
       
       <Route path='/' element={<Home />}></Route>

       <Route path='/product' element={<Product/>}></Route>

       <Route path='/men' element={<Menhome/>}></Route>

       <Route path='/women' element={<WomenHome/>}></Route>

       <Route path='/assesories' element={<AssesoriesHome/>}></Route>

     </Routes>
    
    
    
    
    
    </>
  )
}

export default AllRoutes
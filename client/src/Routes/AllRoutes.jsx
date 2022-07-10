

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import Menhome from '../components/Home/Menhome'
import WomenHome from '../components/Home/WomenHome'

import AssesoriesHome from "../components/Home/AssesoriesHome"
import Product from '../components/Products/Product'
import ProductDetails from '../components/Products/ProductDetails'
import ErrorPage from '../pages/ErrorPage'
import Cart from '../components/Cart/Cart'
import WishList from '../components/Wishlist/WishList'
import Login from '../components/Login/Login'

const AllRoutes = () => {
  return (
    <>
    
    
      
    <Routes>
       
       <Route path='/' element={<Home />}></Route>

       <Route path='/product' element={<Product/>}></Route>

       <Route path='/men' element={<Menhome/>}></Route>

       <Route path='/women' element={<WomenHome/>}></Route>

       <Route path='/assesories' element={<AssesoriesHome/>}></Route>

       <Route path='/products/:product_id' element={<ProductDetails />} />
      
       
       <Route path='/cart' element={<Cart/>} />


       <Route path='/wishlist' element={<WishList/>} />


       
       <Route path='/login' element={<Login/>} />

       

       <Route path='/error' element={<ErrorPage/>} />


     </Routes>
    
    
    
    
    
    </>
  )
}

export default AllRoutes
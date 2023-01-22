import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductCards from '../Components/ProductCards'
import SinglePage from './SinglePage'
import BeautyProductPage from './BeautyProducts'
import ProductPage from './ProductPage'
import { LandingPage } from '../Components/LandingPage'
import Signup from '../Components/Signup'
import  Login  from '../Components/Login/Login'
import  Checkout  from '../Components/Checkout/Checkout'
import { AdminPortal } from './AdminPortal'

const MainRoutes = () => {

  return (
    <Routes>
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/admin" element={<AdminPortal />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path="/product" element={<ProductPage/>}></Route>
        <Route path="/products/:id" element={<SinglePage/>}></Route>
        <Route path="/products" element={<BeautyProductPage/>}></Route>
    </Routes>
  )
}


export default MainRoutes
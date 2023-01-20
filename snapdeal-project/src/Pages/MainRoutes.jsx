import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductCards from '../Components/ProductCards'
import SinglePage from './SinglePage'
import BeautyProductPage from './BeautyProducts'
import ProductPage from './ProductPage'

const MainRoutes = () => {

  return (
    <Routes>
        <Route path="/product" element={<ProductPage/>}></Route>
        <Route path="/products/:id" element={<SinglePage/>}></Route>
        <Route path="/products" element={<BeautyProductPage/>}></Route>
    </Routes>
  )
}

export default MainRoutes
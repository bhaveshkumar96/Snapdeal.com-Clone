import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductCards from '../Components/ProductCards'

const MainRoutes = () => {

  return (
    <Routes>
        <Route path="/" element={<ProductCards/>}></Route>
    </Routes>
  )
}

export default MainRoutes

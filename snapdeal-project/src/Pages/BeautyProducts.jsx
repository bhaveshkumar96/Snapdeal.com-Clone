import React, { useState } from 'react'
// import ProductList from '../Components/ProductList'
import ProductSidebar from '../Components/ProductSidebar'
import styles from '../Styles/Products.module.css'
import styled from 'styled-components'
import SideBar from '../Components/BeutySideBar'
import ProductList from '../Components/BeutyProductList'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const BeautyProductPage = () => {

  return (
    <DivWrapper>
      <Navbar/>
      <div className={styles["products-filter-container"]}>
        <div className={styles["filter-component"]}>
            <SideBar/>
        </div>
        <div className={styles["product-list"]} >
        <ProductList/>
        </div>       
      </div>
      <Footer/>
      </DivWrapper>
  )
}

export default BeautyProductPage

const DivWrapper = styled.div`
   border: 2px solid teal;
   width: 100%;
  //  margin: auto;
  //  display: flex;
  //  gap: 20px;
`
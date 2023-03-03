import React, { useState } from 'react'
import ProductList from '../Components/ProductList'
import ProductSidebar from '../Components/ProductSidebar'
import styles from '../Styles/Products.module.css'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const ProductPage = () => {

  return (
    <DivWrapper>
<<<<<<< HEAD
      {/* <Navbar/> */}
=======
      <Navbar />
>>>>>>> d4c65184b38289dffaa662509766e99dc08ba8b9
      <div className={styles["products-filter-container"]}>
        <div className={styles["filter-component"]}>
          <ProductSidebar />
        </div>
        <div className={styles["product-list"]} >
          <ProductList />
        </div>
      </div>
<<<<<<< HEAD
      {/* <Footer/> */}
      </DivWrapper>
=======
      <Footer />
    </DivWrapper>
>>>>>>> d4c65184b38289dffaa662509766e99dc08ba8b9
  )
}

export default ProductPage

const DivWrapper = styled.div`
   border: 2px solid teal;
   width: 100%;
`
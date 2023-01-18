import React, { useState } from 'react'
import ProductList from '../Components/ProductList'
import ProductSidebar from '../Components/ProductSidebar'
import styles from '../Styles/Products.module.css'

const ProductPage = () => {

  return (
    <div>
      {/* <Navbar/> */}
      <div className={styles["products-filter-container"]}>
        <div className={styles["filter-component"]}>
            <ProductSidebar/>
        </div>
        <div className={styles["product-list"]} >
        <ProductList/>
        </div>       
      </div>
    </div>
  )
}

export default ProductPage

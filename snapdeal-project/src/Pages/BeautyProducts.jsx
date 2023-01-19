import React from 'react'
import styled from 'styled-components'
import ProductList from '../Components/BeutyProductList'
import SideBar from '../Components/BeutySideBar'
import styles from "../Styles/Products.module.css"
export default function BeautyProducts() {
  return (
    
    <DivWrapper>
        <div className={styles["filter-component"]}>
            <SideBar/>
        </div>
        <div className={styles["products-list"]}>
            <ProductList/>
        </div>
    </DivWrapper>
  )
}

const DivWrapper = styled.div`
   border: 2px solid teal;
   width: 90%;
   margin: auto;
   display: flex;
   gap: 20px;
`
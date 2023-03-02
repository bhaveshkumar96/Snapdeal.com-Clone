import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Box, Heading } from '@chakra-ui/react'
import { BsJustifyLeft } from 'react-icons/bs'
import styles from '../Styles/Products.module.css'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

const ProductSidebar = () => {
  const [searchParams, setSearchparams] = useSearchParams()
  const initialState = searchParams.getAll("category")
  const [category, setCategory] = useState(initialState || [])

  const initialOrder = searchParams.get("order")
  const [order, setOrder] = useState(initialOrder || "")
  console.log(order)

  const handleFilter = (e) => {
    const array = [...category]                
    if (array.includes(e.target.value)) {       
      array.splice(array.indexOf(e.target.value), 1);
    }
    else {
      array.push(e.target.value)
    }
    setCategory(array)
  }

  const handleSort = (e) => {
    setOrder(e.target.value)
  }
  useEffect(() => {
    const params = {
      category,  
    };
    order && (params.order = order)
    setSearchparams(params)
  }, [category, order])

  return (
    <div className={styles.sidebar}>

      <Heading as='h4' size='md' color={"black"} paddingTop='50px' className={styles.filterHeading}>
        Mens Fashion
      </Heading>

      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                Category
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div >
              <div className={styles.filtertitle}>
                <input type="checkbox" value="Shirt" onChange={handleFilter}
                  checked={category.includes("Shirt")} />
                <label>Shirt</label>
              </div>
              <div className={styles.filtertitle}>
                <input type="checkbox" value="Jeans" onChange={handleFilter}
                  checked={category.includes("Jeans")} />
                <label>Jeans</label>
              </div>

              <div className={styles.filtertitle}>
                <input type="checkbox" value="Suit" onChange={handleFilter}
                  checked={category.includes("Suit")} />
                <label>Suit</label>
              </div>
              <div className={styles.filtertitle}>
                <input type="checkbox" value="Sweater" onChange={handleFilter}
                  checked={category.includes("Sweater")} />
                <label>Sweater</label>
              </div>
              <div className={styles.filtertitle}>
                <input type="checkbox" value="Jacket" onChange={handleFilter}
                  checked={category.includes("Jacket")} />
                <label>Jacket</label>
              </div>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                Sort By Price
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div onChange={handleSort} >
              <div className={styles.filtertitle}>
                <input type="radio" name="sort_by" value={"asc"} defaultChecked={order === "asc"} />
                <label>Low To High</label>
              </div>
              <div className={styles.filtertitle} >
                <input type="radio" name="sort_by" value={"desc"} defaultChecked={order === "desc"} />
                <label>High To Low</label>
              </div>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                Sort By Title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div onChange={handleSort} >
              <div className={styles.filtertitle}>
                <input type="radio" name="sort" value={"asc"} defaultChecked={order === "asc"} />
                <label>A to Z</label>
              </div>
              <div className={styles.filtertitle} >
                <input type="radio" name="sort" value={"desc"} defaultChecked={order === "desc"} />
                <label> Z to A</label>
              </div>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default ProductSidebar

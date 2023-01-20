import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {Box,Heading} from '@chakra-ui/react'
import { BsJustifyLeft } from 'react-icons/bs'

const ProductSidebar = () => {
  const [searchParams, setSearchparams] = useSearchParams()
  const initialState = searchParams.get("category")
  const [category, setCategory] = useState(initialState || [])

  const initialOrder= searchParams.getAll("order") 
  const [order, setOrder] = useState(initialOrder|| "")
  console.log(order)  

  const handleFilter = (e) => {
    const array = [...category]                  //array or newCategory
    if (array.includes(e.target.value)) {        //filter , splice/slice
      array.splice(array.indexOf(e.target.value), 1);
    }
    else {
      array.push(e.target.value)
    }
    setCategory(array)
  }

  const handleSort=(e)=>{
    setOrder(e.target.value)
  }
  useEffect(() => {
    const params = {
      category,   //order
    };
    order && (params.order=order)  // to add order in the params
    setSearchparams(params)
  }, [category,order])
  return (
    <Box boxShadow={'3xl'} >
    <div style={{fontSize:'18px', color:'#abc72c'}}>
      {/* <h3>Filter By</h3>      */}
        <Heading as='h4' size='md' color={"teal"} paddingTop='50px'>Filter By</Heading>
      <div >
        <input type="checkbox" value="Shirt" onChange={handleFilter}
          checked={category.includes("Shirt")} />
        <label>Shirt</label>
      </div>
      <div>
        <input type="checkbox" value="Jeans" onChange={handleFilter}
          checked={category.includes("Jeans")} />
        <label>Jeans</label>
      </div>
      
      <div>
        <input type="checkbox" value="Suit" onChange={handleFilter}
          checked={category.includes("Suit")} />
        <label>Suit</label>
      </div>
      <div>
        <input type="checkbox" value="Sweater" onChange={handleFilter}
          checked={category.includes("Sweater")} />
        <label>Sweater</label>
      </div>
      <div>
        <input type="checkbox" value="Jacket" onChange={handleFilter}
          checked={category.includes("Jacket")} />
        <label>Jacket</label>
      </div>
      {/* </div> */}
      <br/>
      <br/>

    <Heading as='h4' size='md' color={"teal"}>Sort By Price</Heading>
        <div onChange={handleSort}>
            <input type="radio" name="sort_by" value={"asc"} defaultChecked={order === "asc"}/>
            <Heading as='h5' size='sm' color={"yellow.600"} htmlFor="">Low To High</Heading>
            <input type="radio" name="sort_by" value={"desc"} defaultChecked={order === "desc"}/>
            <Heading as='h5' size='sm' color={"yellow.600"} htmlFor="">High To Low</Heading>
        </div>
   
    </div>
    </Box>
  )
}

export default ProductSidebar

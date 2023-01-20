import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {Box, Heading} from '@chakra-ui/react'
import { BsJustifyLeft } from 'react-icons/bs'

const SideBar = () => {
  const [searchParams, setSearchparams] = useSearchParams()
  const initialState = searchParams.getAll("category")
  const [category, setCategory] = useState(initialState || [])

  const initialOrder= searchParams.get("order") 
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
        <Heading as='h4' size='md' color={"teal"} paddingTop='50px'>Filter By</Heading>
        <br />
      <div >
        <input type="checkbox" value="hair" onChange={handleFilter}
          checked={category.includes("hair")} />
        <label>Hair</label>
      </div>
      <div>
        <input type="checkbox" value="skincare" onChange={handleFilter}
          checked={category.includes("skincare")} />
        <label>Skincare</label>
      </div>
      <div>
        <input type="checkbox" value="makeup" onChange={handleFilter}
          checked={category.includes("makeup")} />
        <label>Makeup</label>
      </div>
      <div>
        <input type="checkbox" value="fragrance" onChange={handleFilter}
          checked={category.includes("fragrance")} />
        <label>Fragrance</label>
      </div>
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

export default SideBar

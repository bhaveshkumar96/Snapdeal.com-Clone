import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {Heading} from '@chakra-ui/react'
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
    <div style={{fontSize:'20px'}}>
      {/* <h3>Filter By</h3>      */}
        <Heading as='h4' size='md' color={"red"}>Filter By</Heading>
        {/* <div style={{fontSize:'20px'}}> */}
      <div >
        <input type="checkbox" value="hair" onChange={handleFilter}
          checked={category.includes("hair")} />
        <label>hair</label>
      </div>
      <div>
        <input type="checkbox" value="skincare" onChange={handleFilter}
          checked={category.includes("skincare")} />
        <label>skincare</label>
      </div>
      
      <div>
        <input type="checkbox" value="makeup" onChange={handleFilter}
          checked={category.includes("makeup")} />
        <label>makeup</label>
      </div>
      <div>
        <input type="checkbox" value="fragrance" onChange={handleFilter}
          checked={category.includes("fragrance")} />
        <label>fragrance</label>
      </div>
      <br/>
      <br/>

    <Heading as='h4' size='md' color={"red"}>Sort By Order</Heading>
        <div onChange={handleSort}>
            <input type="radio" name="sort_by" value={"asc"} defaultChecked={order === "asc"}/>
            <Heading as='h5' size='sm' color={"yellow.500"} htmlFor="">Price Low To High</Heading>
            <input type="radio" name="sort_by" value={"desc"} defaultChecked={order === "desc"}/>
            <Heading as='h5' size='sm' color={"yellow.500"} htmlFor="">Price High To Low</Heading>
        </div>
    </div>
  )
}

export default SideBar

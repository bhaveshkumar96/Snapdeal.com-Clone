import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const ProductSidebar = () => {
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
    <div>
      <h3>Filter By</h3>     
      <div>
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
      <br/>
      <br/>

    <h3>Sort By Order</h3>
    <div onChange={handleSort} style={{display:'grid', fontSize:'bold'}}>
      <input type="radio" name="sort_by" value={"asc"} 
      defaultChecked={order=== "asc"}/>
      <label>Price Low To High</label>
      <input type="radio" name="sort_by" value={"desc"}
      defaultChecked={order=== "desc"}/>
      <label>Price High To Low</label>
    </div>
    </div>
  )
}

export default ProductSidebar

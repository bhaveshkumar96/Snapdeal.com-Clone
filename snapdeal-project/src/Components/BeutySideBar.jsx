import { Checkbox, Heading, Input, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function SideBar() {
    const[searchParams, setSearchParams] = useSearchParams()
    const initialState = searchParams.getAll("category")
    const initialOrder = searchParams.get("order")
    const [category, setCategory] = useState(initialState || [])

    const [order, setOrder] = useState(initialOrder || "")

    const handleFilter = (e) =>{
        let newCategory = [...category]

        if(newCategory.includes(e.target.value)){
            newCategory.splice(newCategory.indexOf(e.target.value),1)
        }else{
            newCategory.push(e.target.value)
        }
        setCategory(newCategory)
    }
    
    const handleSort = (e) =>{
        setOrder(e.target.value)
    }
    useEffect(()=>{
      const params = {
        category,
      };
      order && (params.order = order)
      setSearchParams(params)
    },[category,order])
  return (
    <div>
        <div>
           <RangeSlider aria-label={['min', 'max']} defaultValue={[10, 30]}>
             <RangeSliderTrack>
             <RangeSliderFilledTrack />
             </RangeSliderTrack>
             <RangeSliderThumb index={0} />
             <RangeSliderThumb index={1} />
             </RangeSlider>
        </div>
        <div>

        <Heading as='h4' size='md' color={"red"}>Filter By</Heading>
        <div>
            <Checkbox type="checkbox" value="hair"  onChange={handleFilter} checked={category.includes("hair")}/>
            <label htmlFor="">Hair</label>
        </div>
        <div>
            <Checkbox type="checkbox" value="skincare" onChange={handleFilter} checked={category.includes("skincare")}/>
            <label htmlFor="">Skincare</label>
        </div>
        <div>
            <Checkbox type="checkbox" value="makeup" onChange={handleFilter} checked={category.includes("makeup")} />
            <label htmlFor="">Makeup</label>
        </div>
        <div>
            <Checkbox type="checkbox" value="fragrance" onChange={handleFilter} checked={category.includes("fragrance")}/>
            <label htmlFor="">Fragrance</label>
        </div>
        </div>
       <div>
        
        <Heading as='h4' size='md' color={"red"}>Sort By Order</Heading>
        <div onChange={handleSort}>
            <input type="radio" name="sort_by" value={"asc"} defaultChecked={order === "asc"}/>
            <Heading as='h5' size='sm' color={"yellow.500"} htmlFor="">Price Low To High</Heading>
            <input type="radio" name="sort_by" value={"desc"} defaultChecked={order === "desc"}/>
            <Heading as='h5' size='sm' color={"yellow.500"} htmlFor="">Price High To Low</Heading>
        </div>
        {/* <Sort handleSort={handleSort} order={order}/> */}
       </div> 
    </div>
  )
}

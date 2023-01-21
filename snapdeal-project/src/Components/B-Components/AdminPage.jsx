import { Box, Button, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const AdminPage = () => {
    const [data, setData] = useState({
       name:"",
       description:"",
       price:0,
       image:""
    })
    const [name, setName] = useState("")
    const handleChange = (e)=>{
          setName(e.target.value)
          const {name, value} = e.target
          setData({...data,[name]:value})
    }
    console.log(name)
    const handleSubmit = (e) =>{
          e.preventDefault()
        console.log("button data",data)
        console.log("refresh prevented")
        const arr=[]
        arr.push(data)
        localStorage.setItem("AdminData",JSON.stringify(arr))
    }
   
  return (
    <div>
           <Heading>Admin Card</Heading>
        <FormControl action=""   w={"500px"} margin={"auto"}>
            <FormLabel htmlFor="">Enter Name of product</FormLabel>
            <Input type="text" name='name' placeholder='Enter Name' onChange={handleChange}/>
            <FormLabel htmlFor="">Decription</FormLabel>
            <Input type="text" name="description" placeholder='Enter Decription' onChange={handleChange} />
            <FormLabel htmlFor="" >Price</FormLabel>
            <Input type="number"  name='price' placeholder='Enter Price' onChange={handleChange}/>
            <FormLabel htmlFor="">Enter Image URL</FormLabel>
            <Input type="text" name='image' placeholder='Enter Image url' onChange={handleChange}/>
            <Button onClick={handleSubmit} colorScheme='red'>Add Products</Button>
        </FormControl>
    </div>
  )
}

export default AdminPage
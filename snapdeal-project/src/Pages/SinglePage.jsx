import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import SingleProduct from '../Components/Singleproduct'


const SinglePage = () => {

  const { id } = useParams()
     
  const ID=+id
  // console.log("id is:", ID, "type of", typeof(ID))
  const [data, setData] = useState({})

  const product = useSelector((store) => store.MensProductReducer.product)
  console.log("myProduct", product)
  useEffect(() => {

    let searchData = product.find((el) => el.id === ID)
    searchData && setData(searchData)
  }, [product])

  console.log("data",data)
  
  return (
    <div>
      {/* <Navbar /> */}

      {data && <SingleProduct image={data.image} name={data.name} price={data.price} category={data.category} shipping={data.shipping} star={data.star} />
      }

      {/* <Footer /> */}
    </div>
  )
}

export default SinglePage
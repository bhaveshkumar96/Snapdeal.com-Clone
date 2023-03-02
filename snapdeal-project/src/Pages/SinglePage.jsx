import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import SingleProduct from '../Components/Singleproduct'


const SinglePage = () => {

  const { id } = useParams()
  console.log("id is:", id)
  const product = useSelector((store) => store.MensProductReducer.product)

  const [data, setData] = useState({})
  const dispatch = useDispatch()

  useEffect(() => {
    let search = product.find((el) => el.id === +id)
    search && setData(search)
  }, [])

  
  return (
    <div>
      <Navbar />

      {data && <SingleProduct image={data.image} name={data.name} price={data.price} category={data.category} shipping={data.shipping} star={data.star} />
      }
      <Footer />
    </div>
  )
}

export default SinglePage

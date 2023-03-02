import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/Products/action'
import ProductCards from './ProductCards'
import styles from '../Styles/Products.module.css'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { store } from '../Redux/store'
import Loader from './Loader'
import {Box, Flex, flexbox, Heading, Text} from '@chakra-ui/react'
import Pagination from './Pagination'
import SearchBar from './SearchHook'

const ProductList = () => {
    const dispatch= useDispatch()
    const {product, isLoading} = useSelector((store)=>{return {
    product: store.MensProductReducer.product,
    isLoading :  store.MensProductReducer.isLoading
    }})
    
    const location = useLocation()
  const [searchParams] = useSearchParams()
  // console.log(location)
  const [pageFilter, setPageFilter] = useState({
    pageNumber:1,
    limit:10,
    totalPages:0,
   })
   const {pageNumber, limit}= pageFilter;
    
    console.log("product", product);
     
    //search functionality
    const [query,setQuery]= useState('')  
    const [suggestions,setSuggestions]= useState([])
  
    const queryHandler=useCallback((val)=>{
      setQuery(val)
      console.log(val)
    },[])
  
    //search
    useEffect(()=>{
      if(query===""){
        setSuggestions([]);
      }
      else{
        let textQuery = query.trim().toLowerCase();
        let newSuggestions = product
        .filter((item)=>{
          return item.name.toLowerCase().indexOf(textQuery) !==-1 ? true : false;
        })
        .map((item)=>item.name)
        
        console.log(newSuggestions)
        setSuggestions(newSuggestions)
      }
      // dispatch(getData({query},limit,pageNumber))  
    },[query])


    useEffect(()=>{
      const order = searchParams.get("order")
      let paramObj = {
        params: {
          category: searchParams.getAll("category"),   
          _sort: "price" ,  
          _order: order,
        },
      };
      dispatch(getData(paramObj,limit,pageNumber,query))
    }, [location.search, limit, pageNumber,query])

    return (       
      <div>
      <div className={styles.searchdiv} >
        <div style={{display:"flex"}}>
        <Link to={'/'} >
        <Text>Home  </Text>
        </Link>
        {'>>'} {" "}
        <Text> Product   </Text>{" "}
        <Text >:</Text>{" "}
        </div>
        <div style={{border:'1px solid gray', borderRadius:'5%', position:'relative', zIndex:'1'}}>
        <SearchBar queryHandler={queryHandler} suggestions={suggestions}/>  
        </div>
      </div>
     

      <Box className={styles.container} >
        {isLoading ?  <Loader/> : product.length>0 && product.map((el)=>{
          return <ProductCards key={el.id} id={el.id} name={el.name} image={el.image} price={el.price} category={el.category} shipping={el.shipping} star={el.star}/>
        })}      
    
      </Box>
        <div style={{display:'grid', justifyContent:'center'}} className={styles.container} >
          <Pagination pageFilter={pageFilter} setPageFilter={setPageFilter} />
        </div>      
      </div>
    )
}

export default ProductList

import React,{useState,useEffect} from "react";
import {Button, ButtonGroup,Select} from "@chakra-ui/react"

const Pagination = ({pageFilter, setPageFilter}) => {
  
  const {pageNumber, limit, totalPages}= pageFilter
  console.log(pageNumber, totalPages);

  const updatepageFilter=(change)=>{
    setPageFilter({
      ...pageFilter,
      ...change,
    })
  }
  return (
    <ButtonGroup size='md' isAttached variant='outline' mt={12}>
      <Button 
      disabled={pageNumber===1} 
      onClick={()=> updatepageFilter({pageNumber:1})}>First</Button>

      <Button 
      disabled={pageNumber===1}
      onClick={()=> updatepageFilter({pageNumber: pageNumber-1})}>Previous</Button>
      <Select  
      value={limit} 
      width='fit-content'
      onChange={({target})=> updatepageFilter({limit: +target.value})}>
        <option  value='10'>10</option>
        <option  value='15'>15</option>
        <option  value='20'>20</option>
      </Select>
      <Button 
      disabled={pageNumber===totalPages}
      onClick={()=>updatepageFilter({ pageNumber:pageNumber +1})}
      >Next</Button>
      <Button 
      disabled={pageNumber===totalPages}
      onClick={()=>updatepageFilter({pageNumber :totalPages})}
      >Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;

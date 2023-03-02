import React ,{useState,useEffect, useRef} from 'react'
import styled from 'styled-components';
import {useThrottle} from 'use-throttle';
import {FcSearch} from 'react-icons/fc'
import {MdCancel} from 'react-icons/md'

const SearchBar = ({queryHandler,suggestions}) => {
    const [input,setInput]= useState('')
    const [activeOption,setActiveOption]= useState(0)

    const scrollDiv= useRef()
    const handleInputChange=(e)=>{
    setInput(e.target.value);
    
 }

 const handleActiveSuggestions=(e)=>{
    console.log(e)
    //dropArrow-40
    //upArrow-38
    switch(e.keyCode){
        case 38:
            if(activeOption===1){
                scrollDiv.current.scrollTop = suggestions.length*39; //scrollTop event , 39 height of 1 option
                setActiveOption(suggestions.length)
            }
            else if(activeOption<= suggestions.length-3){
                scrollDiv.current.scrollTop-=39;
            }
            if(activeOption>1){
                setActiveOption((prev)=> prev-1);
            }
            break;
             
        case 40:
            if(activeOption===suggestions.length){
                scrollDiv.current.scrollTop=0;
                setActiveOption(0)
            }
            else if(activeOption>=4){
                scrollDiv.current.scrollTop+=39;
            }

            setActiveOption((prev)=> prev+1)
            break;
        case 13:
             setInput(suggestions[activeOption-1]) 
             suggestions.length=0         
            // return;
            break;
            case 0:
                setInput(suggestions[activeOption-1]) 
                suggestions=0 
               break;    
        default : return
    }
 }

 const throttleText = useThrottle(input,1000)
 useEffect(()=>{
    queryHandler(input)
 },[throttleText,queryHandler])

 const handleClear=()=>{
    setInput("")
 }

    return (
    <Wrapper onKeyUp={handleActiveSuggestions}>
        <SearchBarWrapper>
            <Input type="text" placeholder='search product here' value={input} onChange={handleInputChange} 
            />
            <div style={{display:'flex'}}>
            {suggestions.length==0? <FcSearch height={'80px'} />: <MdCancel onClick={handleClear}/>}</div>
        </SearchBarWrapper>
        <SuggestionBox
        limit={5}
        suggestionsLength ={suggestions.length}
        active={activeOption}
        ref={scrollDiv}
        >
            {suggestions.length>0 && suggestions.map((item,index)=>{
             return (
                <div key={index}
                onMouseOver={()=> {setActiveOption(index+1)
                    
                }}
                >{item}</div>
                
            ) })}
        </SuggestionBox>
    </Wrapper>
  )
}

export default SearchBar

const SuggestionBox=styled.div`
border:1px solid black; 
width: '30%';
max-height:${({limit})=> `${limit*39}px`};
border-top-color: ${({limit})=> (limit ? "transparent": "black")};
border-bottom-color: ${({limit})=> (limit ? "black" : "transparent")};
overflow:auto;
position: relative;
  z-index: 1;

& * {
    padding:10px;
    text-align:left;
    padding-left:20px;
}

& : nth-child(${({active})=> active}){
    background: rgba(0,0,0,0.09);
    cursor: pointer
}
`;
const SearchBarWrapper= styled.div`
display:flex;
border:1px solid black;
`;
const Input= styled.input`
flex:1;
font-size: 20px;
border:none;
outline:none;
`;

const Wrapper= styled.div`
border : "1px solid red;
max-width: 350px;
margin:auto;
`;
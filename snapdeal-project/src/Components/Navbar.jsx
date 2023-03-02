import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"
import styles from "./Navbar.module.css"
export const Navbar = () => {
  const [input, setInput] = useState("")

  const {cart, isLoading} = useSelector((store)=>{return {
    cart: store.CartReducer.cart,   
    isLoading :  store.CartReducer.isLoading
    }})
console.log( cart);
  const handleInputChange =(e)=>{
    setInput(e.target.value)
  }

  useEffect(()=>{
    
  },[cart])
  return <div>
      
      <nav className={styles.mainnav}>
        <div className={styles.logoimg}>
          <Link to={"/"}>
          <img
          width={"50%"}
            src="https://i.ibb.co/RD02FRm/final-logo-sastadeal.png"
            alt=""
          />
          </Link>
        </div>
        <div className={styles.search}>
          <input type="text" value={input} onChange={handleInputChange} placeholder="Search products & brands" />
          <button ><i class="fas fa-search"></i> Search</button>
          <SuggestionBox>
            
          </SuggestionBox>
        </div>
        <div  className={styles.moreitemslist}>
          <div  className={styles.moreitems1}>
            <Link to={"/cart"}>
              Cart ({cart.length}) <i class="fas fa-shopping-cart"></i>
              </Link>
          </div>
          <div className={styles.moreitems2}>
            <a href="/signup" id="user_name"
              >Sign In <i  class="fas fa-user-circle"></i></a>

            <div  className={styles.signsub} >
              <ul>
                <li><i class="far fa-user"></i><Link to="/account">Your Account</Link></li>
                <li><i class="fas fa-box-open"></i> <Link to="/cart">Your Orders</Link>  </li>
              </ul>

              <hr />

              <p>If you are a new user</p>

              <Link to={"/sign-up"}> <h3 style={{fontSize:"20px"}}>Register</h3></Link>

              <Link to={"/login"} > <h3 style={{fontSize:"20px"}}>Login</h3>  </Link>
            </div>
          </div>
        </div>
      </nav>
      <div>
        
      </div>
    
    </div>
  
}

export default Navbar

const SuggestionBox =  styled.div`
   border:1px solid black;
`
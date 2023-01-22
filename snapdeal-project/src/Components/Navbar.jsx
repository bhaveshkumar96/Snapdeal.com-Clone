import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
export const Navbar = () => {
  return <div>
      <div>
      <nav className={styles.topnav}>
        <h2>Brand Waali Quality, Bazaar Waali Deal!</h2>
        <ul>
          <li><a href="">Impact@Snapdeal</a></li>
          <li><a href="">Gift Cards</a></li>
          <li><a href="">Help Center</a></li>
          <li><a href="">Sell On Snapdeal</a></li>
          <li>
            <a href=""> <i class="fas fa-mobile-alt"></i> Download App</a>
          </li>
        </ul>
      </nav>
      </div>
       

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
          <input type="text" placeholder="Search products & brands" />
          <button ><i class="fas fa-search"></i> Search</button>
        </div>
        <div  className={styles.moreitemslist}>
          <div  className={styles.moreitems1}>
            <Link to={"/cart"}>Cart <i class="fas fa-shopping-cart"></i></Link>
          </div>
          <div className={styles.moreitems2}>
            <a href="" id="user_name"
              >Sign In <i  class="fas fa-user-circle"></i></a>

            <div  className={styles.signsub} >
              <ul>
                <li><i class="far fa-user"></i>Your Account</li>
                <li><i class="fas fa-box-open"></i>Your Orders</li>
                <li><i class="far fa-heart"></i>Shortlist</li>
                <li><i class="fas fa-hand-holding-usd"></i>SD Cash</li>
              </ul>

              <hr />

              <p>If you are a new user</p>

              <Link to={"/sign-up"}> <h3>Register</h3></Link>

              <Link to={"/login"} >Login</Link>
            </div>
          </div>
        </div>
      </nav>
      <div>
        
      </div>
    
    </div>
  
}

export default Navbar
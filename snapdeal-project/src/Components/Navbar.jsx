import { Box, Text, useBoolean } from "@chakra-ui/react";
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useThrottle } from "use-throttle";
import { getMenData } from "../Redux/Products/action";
// import styled from "styled-components"
import styles from "../Styles/Navbar.module.css";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { Appcontext } from "../context/Appcontext";
import { useContext } from "react";

export const Navbar = () => {

  const { isAuth } =
    useContext(Appcontext) || localStorage.getItem("authToken");
  const [onChangeValue, setOnChangeValue] = useState("");
  const [search, setSearch] = useState([]);
  const [Products, setProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useBoolean();
  const throttledText = useThrottle(onChangeValue, 400);

  const navigate = useNavigate();
  const { cart } = useSelector((store) => {
    return {
      cart: store.CartReducer.cart,
    };
  });

  const token = localStorage.getItem("authToken");
  const userid = localStorage.getItem("userid");
  const username = localStorage.getItem("username");
  const userage = localStorage.getItem("userage");
  const useremail = localStorage.getItem("useremail");
  const usercity = localStorage.getItem("usercity");
  const usergender = localStorage.getItem("usergender");

  
  const logoutfunction = () => {
    localStorage.setItem("authToken", "");
    localStorage.setItem("username", "");
    localStorage.setItem("userage", "");
    localStorage.setItem("useremail", "");
    localStorage.setItem("usercity", "");
    localStorage.setItem("usergender", "");
    localStorage.setItem("authToken", "");
  };

  const handleInputChange = (e) => {
    setOnChangeValue(e.target.value);
  };

  useEffect(() => {}, [cart]);

  const dispatch = useDispatch();

  const searchMovies = async () => {
    const data = await fetch(`https://snapdeal-productapi.onrender.com/mens`);
    const res = await data.json();
    setProducts(res);
  };
  console.log(Products);

  useEffect(() => {
    searchMovies();
    dispatch(getMenData());
  }, []);

  useEffect(() => {
    if (throttledText === "") {
      setSearch([]);
    } else {
      console.log(throttledText);
      let newSuggestions = Products.filter((item) => {
        return item.name
          .split(" ")
          .join("")
          .trim()
          .toLowerCase()
          .indexOf(throttledText) !== -1
          ? true
          : false;
      });
      setSearch(newSuggestions);
      setShowDropdown.on();
    }
  }, [throttledText]);
  console.log(search);

  return (
    <div>
      <nav className={styles.mainnav}>
        <div className={styles.logoimg}>
          <Link to={"/"}>
            <img
              src="https://i.ibb.co/RD02FRm/final-logo-sastadeal.png"
              alt=""
            />
          </Link>
        </div>

        <div className={styles.search}>
          <input
            type="text"
            value={onChangeValue}
            onChange={handleInputChange}
            placeholder="Search products & brands"
          />
          {/* <button  ><i class="fas fa-search"></i> </button>        */}
        </div>

        {search.length > 0 && (
          <Box
            // border='1px solid black'
            borderRadius="5px"
            position="absolute"
            zIndex="100"
            bgColor="white"
            overflow="scroll"
            w="36%"
            maxH="300px"
            m="auto"
            top={{ base: "40px", sm: "40px", md: "45px", lg: "50px" }}
            left={{ base: "27%", sm: "20px", md: "23%", lg: "21%" }}
          >
            {search.map((item, i) => {
              return (
                <Link href={`/products/${item.id}`} key={i + 1}>
                  <Text
                    fontSize={{
                      base: "10px",
                      sm: "10px",
                      md: "12px",
                      lg: "14px",
                    }}
                    p="10px"
                    cursor="pointer"
                    onClick={setShowDropdown.off}
                  >
                    {item.name}
                  </Text>
                </Link>
              );
            })}
          </Box>
        )}

        <div className={styles.moreitemslist}>
          <div className={styles.moreitems1}>
            <Link to={"/cart"}>
              Cart ({cart.length}) <i class="fas fa-shopping-cart"></i>
            </Link>
          </div>

          <div className={styles.moreitems2}>
            {<p>{username}</p>}
            <i class="fas fa-user-circle"> </i>

            <div className={styles.signsub}>
              <ul>
                <li>
                  <i class="far fa-user"></i>
                  <Link to="/account">Your Account</Link>
                </li>
                {/* <li>
                  <i class="fas fa-box-open"></i>
                  <Link to="/cart">Your Orders</Link>
                </li> */}
              </ul>

              <hr />

              <p>If you are a new user</p>

              <Link to={"/signup"}>
                <h3 style={{ fontSize: "20px" }}>Register</h3>
              </Link>

              <Link to={"/login"}>
                <h3 style={{ fontSize: "20px" }}>Login</h3>{" "}
              </Link>
              <button
                onClick={() => {
                  logoutfunction();
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div></div>
    </div>
  );
};

export default Navbar;

// const SuggestionBox =  styled.div`
//    border:1px solid black;
// `
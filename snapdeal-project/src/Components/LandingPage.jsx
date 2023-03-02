import Carousel from "react-bootstrap/Carousel";
import {HStack, Stack,Image, Text, Heading} from "@chakra-ui/react"
import styles from "./Navbar.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import HomeCarousel from "./Curousel/HomeCarousel";
import HomeCarousel1 from "./Curousel/HomeCarousel1";
import HomeCarousel2 from "./Curousel/HomeCarousel2";

export const LandingPage = () => {

  
  return (
    <div>
      {/* <!-- ------mainbody------- --> */}
      <Navbar/>
      <div className={styles.container}>
        <div className={styles.leftside}   >
          <ul>
            <div class="topCat">TOP CATEGORIES</div>
            <li className={styles.list1}>
              <img
                src="https://n3.sdlcdn.com/imgs/d/h/3/Discount_Right_icon-f5105.png"
                alt=""
              />
              <span style={{ cursor: "pointer" }}>All Offers</span>

              <div className={styles.sublists}>
                <div className={styles.listitems}>
                  {/* <!-- 1st row --> */}
                  <div>
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <p>Air Fresheners</p>
                    <p>Blankets & Comforters</p>
                    <p>Coffee & Tea Makers</p>
                    <p>Hair Dryers</p>
                    <p>Air Conditioners</p>
                    <hr />
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <p>Air Fresheners</p>
                  </div>
                  {/* <!-- 2nd row --> */}
                  <div>
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <hr />
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <p>Air Fresheners</p>
                    <p>Blankets & Comforters</p>
                    <p>Coffee & Tea Makers</p>
                    <p>Hair Dryers</p>
                  </div>
                  {/* <!-- 3rd row --> */}
                  <div>
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <p>Air Fresheners</p>
                    <p>Blankets & Comforters</p>
                    <p>Coffee & Tea Makers</p>
                    <p>Hair Dryers</p>
                    <p>Air Conditioners</p>
                    <hr />
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <p>Air Fresheners</p>
                    <p>Blankets & Comforters</p>
                  </div>

                  {/* <!-- ---4th row --> */}

                  <img
                    src="https://n4.sdlcdn.com/imgs/i/f/f/BlockbusterDeals-cb277.jpg"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li className={styles.list2} style={{ cursor: "pointer" }}>
              <img
                src="https://i1.sdlcdn.com/img/leftnavicon09/30x30mobile2.png"
                alt=""
              />
              <span>Mobile & Tablets</span>
              <div className={styles.sublists}>
                <div className={styles.listitems}>
                  {/* <!-- 1st row --> */}
                  <div>
                    <h4>MOBILE PHONES</h4>
                    <a href="/">
                      {" "}
                      <p>PowerBanks</p>
                    </a>
                    <p>Feature Phones</p>

                    <hr />
                    <h4>MOBILE CASES & COVERS</h4>
                    <p>New Launches Covers</p>
                    <p>Printed Back Covers</p>
                    <p>Plain Back Covers</p>
                    <p>Flip Covers</p>
                    <p>Premium Covers</p>

                    <hr />
                    <h4>TOP BRANDS</h4>
                    <p>Panasonic</p>
                    <p>Samsung</p>
                    <p>Apple</p>
                    <p>Redmi</p>
                  </div>
                  {/* <!-- 2nd row --> */}
                  <div>
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <hr />
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <p>Air Fresheners</p>
                    <p>Blankets & Comforters</p>
                    <p>Coffee & Tea Makers</p>
                    <p>Hair Dryers</p>
                  </div>
                  {/* <!-- 3rd row --> */}
                  <div>
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <p>Air Fresheners</p>
                    <p>Blankets & Comforters</p>
                    <p>Coffee & Tea Makers</p>
                    <p>Hair Dryers</p>
                    <p>Air Conditioners</p>
                    <hr />
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                  </div>

                  {/* <!-- ---4th row --> */}

                  <img
                    src="https://n2.sdlcdn.com/imgs/i/7/q/Mobiles_17jan-197ca.jpg"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li className={styles.list3} style={{ cursor: "pointer" }}>
              <img
                src="https://n2.sdlcdn.com/imgs/d/2/c/Electronic-6212c.png"
                alt=""
              />
              <span>Electronics</span>
              <div className={styles.sublists}>
                <div className={styles.listitems}>
                  {/* <!-- 1st row --> */}
                  <div>
                    <h4>TELEVISIONS</h4>
                    <p>Top Selling TVs</p>
                    <p>Full HD Tvs</p>
                    <p>Smart Tvs</p>
                    <p>Ultra HD Tvs</p>
                    <p>DTH Services</p>

                    <hr />
                    <h4>Speakers</h4>
                    <p>Home Audio Systems</p>
                    <p>Bluetooth Speakers</p>
                    <p>2.0 & 2.1 Speakers</p>

                    <hr />
                    <h4>Headphones & Earphones</h4>
                    <p>Headphones</p>
                    <p>Earphones</p>
                    <p>Headsets with mic</p>
                    <p>iPods & MP# Players</p>
                  </div>
                  {/* <!-- 2nd row --> */}
                  <div>
                    <h4>Headphones & Earphones</h4>
                    <p>Headphones</p>
                    <p>Earphones</p>
                    <p>Headsets with mic</p>
                    <p>iPods & MP# Players</p>
                    <hr />
                    <h4>Speakers</h4>
                    <p>Home Audio Systems</p>
                    <p>Bluetooth Speakers</p>
                    <p>2.0 & 2.1 Speakers</p>
                    <p>Full HD Tvs</p>
                    <p>Smart Tvs</p>
                    <p>Ultra HD Tvs</p>
                    <p>DTH Services</p>
                  </div>
                  {/* <!-- 3rd row --> */}
                  <div>
                    <h4>TELEVISIONS</h4>
                    <p>Top Selling TVs</p>
                    <p>Full HD Tvs</p>
                    <p>Smart Tvs</p>
                    <p>Ultra HD Tvs</p>
                    <p>DTH Services</p>
                    <hr />
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                  </div>

                  {/* <!-- ---4th row --> */}

                  <img
                    src="https://n4.sdlcdn.com/imgs/i/1/o/electronics-7e68c.jpg"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li className={styles.list4} style={{ cursor: "pointer" }}>
              <img
                src="https://n2.sdlcdn.com/imgs/d/2/c/ComputerGaming-a02cf.png"
                alt=""
              />
              <span>Computers & Gaming</span>
              <div className={styles.sublists}>
                <div className={styles.listitems}>
                  {/* <!-- 1st row --> */}
                  <div>
                    <h4 style={{ marginRight: "15px" }}>LAPTOPS</h4>
                    <p>Core i3 Laptops</p>
                    <p>Core i5 Laptops</p>
                    <p>Budget Laptops</p>
                    <p>Thin & Light Laptops</p>

                    <hr />
                    <h4>Printers & INKS</h4>
                    <p>Printers</p>
                    <p>Scanners</p>
                    <p>Inks & Toners</p>

                    <hr />
                    <h4>STORAGES</h4>
                    <p>External Hard Drives</p>
                    <p>Memory Cards</p>
                    <p>Pen Drives</p>
                    <p>SSD</p>
                  </div>
                  {/* <!-- 2nd row --> */}
                  <div>
                    <h4>Headphones & Earphones</h4>
                    <p>Headphones</p>
                    <p>Earphones</p>
                    <p>Headsets with mic</p>
                    <p>iPods & MP# Players</p>
                    <hr />
                    <h4>Speakers</h4>
                    <p>Home Audio Systems</p>
                    <p>Bluetooth Speakers</p>
                    <p>2.0 & 2.1 Speakers</p>
                    <p>Full HD Tvs</p>
                    <p>Smart Tvs</p>
                    <p>Ultra HD Tvs</p>
                    <p>DTH Services</p>
                  </div>
                  {/* <!-- 3rd row --> */}
                  <div>
                    <h4>PRinters & INKS</h4>
                    <p>Printers</p>
                    <p>Scanners</p>
                    <p>Inks & Toners</p>
                    <hr />
                    <h4>STORAGES</h4>
                    <p>External Hard Drives</p>
                    <p>Memory Cards</p>
                    <p>Pen Drives</p>
                    <p>SSD</p>
                  </div>

                  {/* <!-- ---4th row --> */}

                  <img
                    style={{ marginLeft: "15px" }}
                    src="https://n1.sdlcdn.com/imgs/i/1/r/Laptopacc_28oct-581f8.jpg"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li className={styles.list5} style={{ cursor: "pointer" }}>
              <img
                src="https://n2.sdlcdn.com/imgs/c/0/x/Homekitchenfurnishing-3eda1.jpg"
                alt=""
              />
              <span>Home & Kitchen</span>

              <div className={styles.sublists}>
                <div className={styles.listitems}>
                  {/* <!-- 1st row --> */}
                  <div>
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <p>Air Fresheners</p>
                    <p>Blankets & Comforters</p>
                    <p>Coffee & Tea Makers</p>
                    <p>Hair Dryers</p>
                    <p>Air Conditioners</p>
                    <hr />
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <p>Air Fresheners</p>
                  </div>
                  {/* <!-- 2nd row --> */}
                  <div>
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <hr />
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <p>Air Fresheners</p>
                    <p>Blankets & Comforters</p>
                    <p>Coffee & Tea Makers</p>
                    <p>Hair Dryers</p>
                  </div>
                  {/* <!-- 3rd row --> */}
                  <div>
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <p>Air Fresheners</p>
                    <p>Blankets & Comforters</p>
                    <p>Coffee & Tea Makers</p>
                    <p>Hair Dryers</p>
                    <p>Air Conditioners</p>
                    <hr />
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <p>Air Fresheners</p>
                    <p>Blankets & Comforters</p>
                  </div>

                  {/* <!-- ---4th row --> */}
                  {/* <div id="listimg"> */}
                  <img
                    src="https://n4.sdlcdn.com/imgs/i/f/f/BlockbusterDeals-cb277.jpg"
                    alt=""
                  />
                  {/* </div> */}
                </div>
              </div>
            </li>
            <li className={styles.moreCat}>
              <p>MORE CATEGORIES</p>
            </li>
            <div className={styles.moreli} style={{ cursor: "pointer" }}>
              <li>
                <span>
                  <Link to={"/product"}>
                     Men's Fashion
                  </Link>
                  </span>
              </li>
              <li>
                <span>
                  <Link to={"/products"}>
                  Beauty and Health
                  </Link>           
                  </span>
              </li>
              <li>
                <span>Toys,kids Fashion & More</span>
              </li>
              <li>
                <span> Women's Fashion</span>
              </li>
              <li>
                <span>Sports,Fitness & Outdoor</span>
              </li>
              <li>
                <span>Car & Motorbike</span>
              </li>
              <li>
                <span>Hobbies</span>
              </li>
              <li>
                <span>Books,Media & Music</span>
              </li>
              <li>
                <a href="">See All Categories</a>
              </li>
            </div>
            <li className={styles.moreCat}>
              <p>TRENDING SEARCHES</p>
            </li>
            <div className={styles.moreli} style={{ cursor: "pointer" }}>
              <li>
                <span>
                  {" "}
                  <i class="fas fa-search"></i> Hair Straightener
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  <i class="fas fa-search"></i> Makeup Kit
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  <i class="fas fa-search"></i> Hookah
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  <i class="fas fa-search"></i> Sling Bag
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  <i class="fas fa-search"></i> Bluetooth Speaker
                </span>
              </li>
            </div>
          </ul>
        </div>
        <div className={styles.barcode}>
          {/* <img
            width={"15%"}
            height="85%"
            src="data:image/png;base64,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"
            alt=""
          
          /> */}
          <div className={styles.bartext}>
            <p>Enjoy Convenient Order Tracking</p>
            <h3>Scan to download app</h3>
          </div>
        </div>
        <div className={styles.rightside}>
          {/* Slider starts here */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://n4.sdlcdn.com/imgs/k/a/z/Tshirt_WEB_10dec-dce51.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://n2.sdlcdn.com/imgs/k/a/z/Dresess_WEB_10dec-89750.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://n3.sdlcdn.com/imgs/k/a/z/Footwear_Collection_WEB_10dec-fea6a.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://n4.sdlcdn.com/imgs/k/a/z/Tshirt_WEB_10dec-dce51.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://n4.sdlcdn.com/imgs/j/t/8/Web1min-cbb30.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          {/* <!-- ---cardslider-- --> */}
          <div className={styles.Container}>
            <h2 style={{letterSpacing:"2px",marginTop:"25px",border:"1px solid gray",padding:"5px"}}>RECENTLY VIEWED PRODUCTS</h2>
            <Link to={'/product'}>
            <HomeCarousel/>
            </Link>
            {/* <HStack className={styles.trending}>
              <Stack h={"370px"}  w={"20%"} className={styles.trenditems} lineHeight="1">
                <Image src="https://n1h2.sdlcdn.com/imgs/j/x/9/large/Vighnraj-Jewels-Circular-Blue-Colored-SDL992834142-1-29260.webp" alt="221" w={"100%"}/>
                <Text>
                Vighnraj Jewels Circular Blue Colored 
                </Text>
                <p>Price : 1500 Rs</p>               
              </Stack>
              
              <Stack h={"370px"}  w={"20%"} className={styles.trenditems} lineHeight="1">
                <Image src="https://n1h2.sdlcdn.com/imgs/f/4/5/large/Scotlon-Krishna-with-Cute-Calf-SDL923415679-3-06886.webp" alt="221" w={"100%"}/>
                <Text>
                Scotlon Krishna with Cute Calf
                </Text>
                <p>Price : 1200 Rs</p>
                
              </Stack>
              <Stack h={"370px"}  w={"20%"} className={styles.trenditems} lineHeight="1">
                <Image src="https://n1h2.sdlcdn.com/imgs/j/r/3/large/HVBK-Cotton-Blend-Grey-Self-SDL663200475-1-65025.webp" alt="221" w={"100%"}/>
                <Text>
                HVBK Cotton Blend Grey Self Design T-Shirt
                </Text>
                <p>Price : 120 Rs</p>
                
              </Stack>
              <Stack h={"370px"}  w={"20%"} className={styles.trenditems} lineHeight="1">
                <Image src="https://n1h2.sdlcdn.com/imgs/b/2/y/large/Vastu-Laughing-buddha-SDL982981024-1-34a94.webp" alt="221" w={"100%"}/>
                <Text >
                Vastu Laughing buddha
                </Text>
                <p>Price : 400 Rs</p>
              
              </Stack>
              <Stack h={"370px"}  w={"20%"} className={styles.trenditems} lineHeight="1">
                <Image src="https://n1h2.sdlcdn.com/imgs/j/v/1/large/HELLCAT-Black-and-Green-Full-SDL984712037-1-dc7ba.webp" alt="221" w={"100%"}/>
                <Text>
                HELLCAT Black and Green Full Sleeve Tshirt Pack of 2
                </Text>
                <p>Price : 1212 Rs</p>
              </Stack>
            </HStack> */}
            <Link to={'/product'}>
            <HomeCarousel1/>
            </Link>

            <h2 style={{letterSpacing:"2px",marginTop:"25px",border:"1px solid gray",padding:"5px"}}>POPULAR PRODUCTS</h2>
            {/* <HStack className={styles.trending} flexWrap={true}>
              <Stack h={"fit-content"}  w={"20%"} className={styles.trenditems} lineHeight="1">
                <Image src="https://images.pexels.com/photos/1381553/pexels-photo-1381553.jpeg?auto=compress&cs=tinysrgb&w=600" alt="221" w={"100%"}/>
                <Text>
                Coat for Women 
                </Text>
                <p>Price : 1500 Rs</p>
           
              </Stack>
              <Stack h={"fit-content"}  w={"20%"} className={styles.trenditems} lineHeight="1">
                <Image src="https://images.pexels.com/photos/1035692/pexels-photo-1035692.jpeg?auto=compress&cs=tinysrgb&w=600" alt="221" w={"100%"}/>
                <Text>
                Black Jacket for Girls
                </Text>
                <p>Price : 1200 Rs</p>
                
              </Stack>
              <Stack h={"fit-content"}  w={"20%"} className={styles.trenditems} lineHeight="1">
                <Image src="https://images.pexels.com/photos/2229712/pexels-photo-2229712.jpeg?auto=compress&cs=tinysrgb&w=600" alt="221" w={"100%"}/>
                <Text>
                Men's Denim Jacket
                </Text>
                <p>Price : 1220 Rs</p>
              
              </Stack>
              <Stack h={"fit-content"}  w={"20%"} className={styles.trenditems} lineHeight="1">
                <Image src="https://images.pexels.com/photos/3538028/pexels-photo-3538028.jpeg?auto=compress&cs=tinysrgb&w=600" alt="221" w={"100%"}/>
                <Text >
                Office Wears
                </Text>
                <p>Price : 400 Rs</p>
                
              </Stack>
              <Stack h={"fit-content"}  w={"20%"} className={styles.trenditems} lineHeight="1">
                <Image src="https://images.pexels.com/photos/1750776/pexels-photo-1750776.jpeg?auto=compress&cs=tinysrgb&w=600" alt="221" w={"100%"}/>
                <Text>
                Velvet Jacket
                </Text>
                <p>Price : 1212 Rs</p>
             
              </Stack>
            </HStack> */}
            <Link to={'/product'}>
            <HomeCarousel2/>
            </Link>

          </div>
        
          
        </div>
      </div>
      
      <div className={styles.downloadsnap}>
        <img src="https://i1.sdlcdn.com/img/appScreenshot@1x.png" alt="" />
        <div className={styles.snapText}>
          <h5>Download Snapdeal App Now</h5>
          <p>Fast, Simple & Delightful.</p>
          <h4>All it takes is 30 seconds to Download.</h4>
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        <img
          className={styles.leaves}
          src="https://i1.sdlcdn.com/img/leaves1x.png"
          alt=""
        />
      </div>
      <Footer/>
    </div>
  );
};

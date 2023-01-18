// className={styles.topnav}
import Carousel from "react-bootstrap/Carousel";
import styles from "./Navbar.module.css";
export const LandingPage = () => {
  return (
    <div>
      {/* <!-- ------mainbody------- --> */}
      <div className={styles.container}>
        <div className={styles.leftside}>
          <ul>
            <div className={styles.topCat}>TOP CATEGORIES</div>
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
                  {/* className={styles.listitems} */}

                  <img
                    src="https://n4.sdlcdn.com/imgs/i/f/f/BlockbusterDeals-cb277.jpg"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li className={styles.list2}>
              <img
                src="https://i1.sdlcdn.com/img/leftnavicon09/30x30mobile2.png"
                alt=""
              />
              <span style={{ cursor: "pointer" }}>Mobile & Tablets</span>
              <div className={styles.sublists}>
                <div className={styles.listitems}>
                  {/* <!-- 1st row --> */}
                  <div>
                    <h4>MOBILE PHONES</h4>
                    <a href="product.html">
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
                  {/* 
                <!-- ---4th row --> */}

                  <img
                    src="https://n2.sdlcdn.com/imgs/i/7/q/Mobiles_17jan-197ca.jpg"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li className={styles.list3}>
              <img
                src="https://n2.sdlcdn.com/imgs/d/2/c/Electronic-6212c.png"
                alt=""
              />
              <span style={{ cursor: "pointer" }}>Electronics</span>
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
                  {/* <div  className={styles.listimg}> */}
                  <img
                    src="https://n4.sdlcdn.com/imgs/i/1/o/electronics-7e68c.jpg"
                    alt=""
                  />
                  {/* </div> */}
                </div>
              </div>
            </li>
            <li className={styles.list4}>
              <img
                src="https://n2.sdlcdn.com/imgs/d/2/c/ComputerGaming-a02cf.png"
                alt=""
              />
              <span style={{ cursor: "pointer" }}>Computers & Gaming</span>
              <div className={styles.sublists}>
                <div className={styles.listitems}>
                  {/* <!-- 1st row --> */}
                  <div>
                    <h4>LAPTOPS</h4>
                    <p>Core i3 Laptops</p>
                    <p>Core i5 Laptops</p>
                    <p>Budget Laptops</p>
                    <p>Thin & Light Laptops</p>

                    <hr />
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
                  {/* <div   className={styles.listimg}> */}
                  <img
                    src="https://n1.sdlcdn.com/imgs/i/1/r/Laptopacc_28oct-581f8.jpg"
                    alt=""
                  />
                  {/* </div> */}
                </div>
              </div>
            </li>
            <li id="" className={styles.list5}>
              <img
                src="https://n2.sdlcdn.com/imgs/c/0/x/Homekitchenfurnishing-3eda1.jpg"
                alt=""
              />
              <span style={{ cursor: "pointer" }}>Home & Kitchen</span>

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
                  {/* <div   className={styles.listimg}> */}
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
                <span>Men's Fashion</span>
              </li>
              <li>
                <span>Women's Fashion</span>
              </li>
              <li>
                <span>Toys,kids Fashion & More</span>
              </li>
              <li>
                <span>Beauty,Health & Daily Needs</span>
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
            <li className={styles.moreCat} style={{ cursor: "pointer" }}>
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
            {/* <h2>RECENTLY VIEWED PRODUCTS</h2>
          <div id="slider-container">
            <span onclick="slideRight()" class="btn prevbtn"
              ><i class="fas fa-chevron-circle-left"></i
            ></span>
            <div id="slider">
              <div class="slide">
                <a href="product.html">
                  <img
                    src="https://n1.sdlcdn.com/imgs/i/z/e/large/Bentag-Vegetable-Fruit-Clever-Cutter-SDL841893040-1-ea5e3.jpg"
                    alt=""
                  />
                  <div class="stars">
                    <span
                      ><i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fas fa-star"></i
                    ></span>
                  </div>
                  <p>Bentag Vegetable Fruit Clever Stainless Steel Cutter</p>
                  <p>Rs 775</p>
                </a>
              </div>
              <div class="slide">
                <a href="product.html">
                  
                  <img
                  src="https://n2.sdlcdn.com/imgs/j/o/r/large/Veirdo-100-Percent-Cotton-Green-SDL302182620-1-1ba35.jpeg"
                  alt=""
                  />
                  <div class="stars">
                    <span
                    ><i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fas fa-star"></i><i class="fas fa-star"></i
                        ><i class="fa-regular fa-star"></i
                          ></span>
                        </div>
                        <p>Veirdo 100 Percent Cotton Green T-Shirt</p>
                        <p>Rs 309</p>
                      </a>
              </div>
              <div class="slide">
                <a href="product.html">
                  
                  <img
                  src="https://n3.sdlcdn.com/imgs/j/x/8/large/Callmate-H23-With-USB-Bulb-SDL255337924-1-191e6.jpeg"
                  alt=""
                  />
                  <div class="stars">
                    <span
                    ><i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fas fa-star"></i><i class="fas fa-star"></i
                        ><i class="fa-regular fa-star"></i
                          ></span>
                        </div>
                        <p>Callmate H23 With USB Bulb 10000 -mAh Li-Polymer</p>
                        <p>Rs 519</p>
                      </a>
              </div>
              <div class="slide">
                <a href="product.html">
                  
                  <img
                  src="https://n1.sdlcdn.com/imgs/i/n/r/large/bhawna-collection-Loard-Shiv-Trishul-SDL890408077-1-86933.jpeg"
                  alt=""
                  />
                  <div class="stars">
                    <span
                    ><i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fas fa-star"></i><i class="fas fa-star"></i
                        ><i class="fas fa-star"></i
                          ></span>
                        </div>
                        <p>bhawna collection Loard Shiv Trishul</p>
                        <p>Rs 310</p>
                      </a>
              </div>
              <div class="slide">
                <a href="product.html">
                  
                  <img
                  src="https://n1h2.sdlcdn.com/imgs/j/r/3/large/HVBK-Cotton-Blend-Grey-Self-SDL663200475-1-65025.webp"
                  alt=""
                />
                <div class="stars">
                  <span
                  ><i class="fas fa-star"></i><i class="fas fa-star"></i
                    ><i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fa-regular fa-star"></i
                        ></span>
                      </div>
                      <p>HVBK Cotton Blend Grey Self</p>
                      <p>Rs 289</p>
                    </a>
              </div>
              <div class="slide">
                <a href="product.html">
                  
                  <img
                  src="https://n1h2.sdlcdn.com/imgs/b/2/y/large/Vastu-Laughing-buddha-SDL982981024-1-34a94.webp"
                  alt=""
                />
                <div class="stars">
                  <span
                  ><i class="fas fa-star"></i><i class="fas fa-star"></i
                    ><i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fa-regular fa-star"></i
                        ></span>
                      </div>
                      <p>Vastu Laughing buddha</p>
                      <p>Rs 279</p>
                    </a>
              </div>
              <div class="slide">
                <a href="product.html">
                  
                  <img
                  src="https://n1h2.sdlcdn.com/imgs/j/t/f/large/Exopick-Set-of-4-Jute-SDL375279574-1-53876.webp"
                  alt=""
                />
                <div class="stars">
                  <span
                  ><i class="fas fa-star"></i><i class="fas fa-star"></i
                    ><i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fas fa-star"></i
                        ></span>
                      </div>
                      <p>Exopick Set of 4 Jute</p>
                      <p>Rs 219</p>
                    </a>
              </div>
              <div class="slide">
                <a href="product.html">
                  
                  <img
                  src="https://n1h2.sdlcdn.com/imgs/j/t/3/large/The-Million-Club-Cotton-Blend-SDL861826485-1-73375.webp"
                  alt=""
                />
                <div class="stars">
                  <span
                  ><i class="fas fa-star"></i><i class="fas fa-star"></i
                    ><i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fa-regular fa-star"></i
                        ></span>
                      </div>
                      
                      <p>The Million Club Cotton Blend</p>
                    </a>
                <p>Rs 415</p>
              </div>
              <div class="slide">
                <a href="product.html">
                  
                  <img
                  src="https://n1h2.sdlcdn.com/imgs/i/8/g/large/Night-Vision-Super-Clear-Helmet-SDL209948070-1-a6570.webp"
                  alt=""
                />
                
                <div class="stars">
                  <span
                  ><i class="fas fa-star"></i><i class="fas fa-star"></i
                    ><i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fas fa-star"></i
                        ></span>
                      </div>
                      <p>Night Vision Super Clear Helmet</p>
                    </a>
                <p>Rs 145</p>
              </div>
              <div class="slide">
                <a href="product.html">
                  
                  <img
                  src="https://n2.sdlcdn.com/imgs/j/7/u/large/Ambrane-PP-111-10000-mAh-SDL697853207-1-b8fd0.jpg"
                  alt=""
                />
                <div class="stars">
                  <span><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fas fa-star"></i
                        ></span>
                      </div>
                     
                        
                        <p>
                    Ambrane PP-111 10000 -mAh Li-Polymer Power Bank Blue</p></a>
                <p>Rs 775</p>
              </div>
            </div>
            <span onclick="slideLeft()" class="btn nextbtn"
              ><i class="fas fa-chevron-circle-right"></i
            ></span>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

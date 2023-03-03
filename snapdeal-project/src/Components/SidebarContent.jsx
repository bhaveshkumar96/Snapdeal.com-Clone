import React from 'react'
import styles from '../Styles/Navbar.module.css'
import { Link } from "react-router-dom";

const SidebarContent = () => {

    return (
        <div className={styles.leftside}   >
            <ul>
                <div class={styles.topCat}>
                    <h6>TOP CATEGORIES </h6>
                </div>
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

                    <Link to={"/product"}>
                        <li>
                            <span>
                                Men's Fashion
                            </span>
                        </li>
                    </Link>
                    <Link to={"/products"}>
                        <li>
                            <span>
                                Beauty and Health
                            </span>
                        </li>
                    </Link>
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
                        <span> See All Categories</span>
                    </li>
                </div>
                <li className={styles.moreCat} id={styles.hide}>
                    <p>TRENDING SEARCHES</p>
                </li>
                <div className={styles.moreli} id={styles.hide} style={{ cursor: "pointer" }}>
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
    )
}

export default SidebarContent

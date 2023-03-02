import { HStack,Box } from "@chakra-ui/react";
import { resolvePath } from "react-router-dom";
import styles from "./Navbar.module.css";
export const Footer = () => {
  return (
    <div>
      <div className={styles.footer1}>
        <Box className={styles.footCard}  display={'grid'} gridTemplateColumns={{base:"repeat(2,1fr)",sm:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(6,1fr)"}} gap={3} margin={'auto'} >
          <div className={styles.footitems}>
            <h3>Policy Info</h3>
            <p>Privacy Policy</p>
            <p>Terms of Sale</p>
            <p>Terms of Use</p>
            <p>Report Abuse & Takedown Policy</p>
          </div>
          <div className={styles.footitems}>
            <h3>COMPANY</h3>
            <p>About Us</p>
            <p>Impact@Snapdeal</p>
            <p>Core Values</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Site Map</p>
          </div>
          <div className={styles.footitems}>
            <h3>SNAPDEAL BUSINESS</h3>
            <p>Shopping App</p>
            <p>Sell on Snapdeal</p>
            <p>Advertise on Snapdeal</p>
            <p>Media Enquiries</p>
            <p>Be an Affiliate</p>
          </div>
          <div className={styles.footitems}>
            <h3>Policy Info</h3>
            <p>Privacy Policy</p>
            <p>Terms of Sale</p>
            <p>Terms of Use</p>
            <p>Report Abuse & Takedown Policy</p>
          </div>
          <div className={styles.footitems}>
            <h3>NEED HELP ?</h3>
            <p>FAQ</p>
            <p>Contact Us</p>
            <p>Online Shopping</p>
          </div>
          <div className={styles.footitems}>
            <h3>SUBSCRIBE</h3>
            <input type="text" placeholder="Your email address" />
            <button>SUBSCRIBE</button>
            <p>Register now to get updates on promotions and coupons</p>
            <span> Or Download App</span>
          </div>
        </Box>
      </div>
      {/* <!-- ------payments---- --> */}
      <div className={styles.payments} display={'grid'} gridTemplateColumns={{base:"repeat(2,1fr)",sm:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(6,1fr)"}} gap={3} margin={'auto'}>
        <div className={styles.pay}>
          <h2>PAYMENTS</h2>
          <div className={styles.icons}>
            <HStack justifyContent={"space-between"} mt="15px">
              {" "}
              <img
                width={"10%"}
                src="https://img.icons8.com/color/48/null/mastercard-credit-card.png"
              />
            
            
              <img
                width={"10%"}
                src="https://img.icons8.com/ios/50/null/visa.png"
              />
            
            
              <img
                width={"10%"}
                src="https://img.icons8.com/fluency/48/null/paypal.png"
              />
            
            
              <img
                width={"10%"}
                src="https://img.icons8.com/emoji/48/null/credit-card-emoji.png"
              />
            
              <img
                width={"10%"}
                src="https://img.icons8.com/ios-filled/50/null/apple-pay.png"
              />
            </HStack>
          </div>
        </div>
        <div className={styles.social}>
          <h2>CONNECT</h2>
          <div className={styles.icons}>
            <HStack justifyContent={"space-between"} mt="15px">
          
              <img
                width={"10%"}
                src="https://img.icons8.com/fluency/48/null/facebook-new.png"
              />
            
          
              <img
                width={"10%"}
                src="https://img.icons8.com/color/48/null/youtube-play.png"
              />
           
              <img
                width={"10%"}
                src="https://img.icons8.com/color/48/null/twitter--v1.png"
              />
            
          
              <img
                width={"10%"}
                src="https://img.icons8.com/color/48/null/instagram-new--v1.png"
              />
            
          
              <img
                width={"10%"}
                src="https://img.icons8.com/color/48/null/pinterest--v1.png"
              />
            
            </HStack>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            color: "gray",
            fontSize: "12px",
            marginLeft: "15px",
            textAlign: "left",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          <p style={{marginLeft:"5px",marginTop:"10px",marginBottom:"10px"}}>
            <b >Men:</b> Shirts for Men / Casual Shirts for Men / Formal Shirts
            for Men / Hoodies for Men / Cotton Shirts for Men / T Shirts for Men
            / Polo T shirts / Kurta Pajama for Men / White Shirt / Black Shirt /
            Lower for Men / Trousers for Men / Jacket for Men / Formal Pants for
            Men / Tracksuit for Men / Jeans for Men / Kurta Payjama Sets / Kurta
            for Men / Blazer for Men / Sweater for Men
          </p>
          <p
            style={{
              color: "gray",
              fontSize: "12px",
              marginLeft: "5px",
              textAlign: "left",
              marginTop:"10px",marginBottom:"10px"
            }}
          >
            <b>Women:</b> Tops for Women / Kurti / Cotton Sarees / Georgette
            Sarees / Chiffon Sarees / Net Sarees / Dresses for Women / Jumpsuit
            for Women / Jeans for Women / Salwar Suit / Bra / Jacket for Women /
            Night Dress for Women / Sweatshirt for Women / Shorts for Women /
            Readymade Blouse / Dupatta / T Shirt for Women / Shirts for Women /
            Skirts for Women / Ethnic wear for Women / Western Dresses for Women
            / Leggings for Women{" "}
          </p>
          <p
            style={{
              color: "gray",
              fontSize: "12px",
              marginLeft: "5px",
              textAlign: "left",
              marginTop:"10px",marginBottom:"10px"
            }}
          >
            <b>Footwear:</b> Men's Footwear / Casual Shoes for Men / Formal
            Shoes for Men / Loafers for Men / Slippers for Men / Boots for Men /
            Sandals for Men / Footwear for Women / Heels for Women / Sandals for
            Women / Shoes for Women / Sandals for Women / Slippers for Women /
            Boots for Women / Jutti for Women / Sports Shoes for Women{" "}
          </p>
          <p
            style={{
              color: "gray",
              fontSize: "12px",
              marginLeft: "5px",
              textAlign: "left",
              marginTop:"10px",marginBottom:"10px"
            }}
          >
            <b>Home & Kitchen:</b> Wall Painting / Wall Stickers / Dream Catcher
            / Rangoli Designs / Clock / Wall Clock / Alarm Clock / Diya / Bean
            Bag / Laptop Table / Study Table / Wall Hanging / Ceiling Lights /
            Table Lamp / Hanging Lights / LED Bulbs / Torch Light / LED Lights /
            Flower Vase / Keychain / Rudraksha / Screwdriver{" "}
          </p>
          <p
            style={{
              color: "gray",
              fontSize: "12px",
              marginLeft: "5px",
              textAlign: "left",
              marginTop:"10px",marginBottom:"10px"
            }}
          >
            <b>Electronics:</b> Bluetooth Speakers / Headphones / Earphone /
            Ceiling Fan / Geysers / Trimmer / Hair Straightner / Hair Dryer /
            Water Purifier / Mixer Grinder / Gas Stove / Electric Kettle /
            Computer Mouse / Computer Keyboard / USB & HDMI Cables / Computer
            Antivirus{" "}
          </p>
        </div>
        {/* about SNAPDEAL */}
        <div
          style={{ textAlign: "left", letterSpacing: "0", marginLeft: "15px" }}
        >
          <h6
            style={{
              textAlign: "left",
              letterSpacing: "0",
              marginLeft: "8px",
            }}
          >
            About Snapdeal
          </h6>
          <p style={{ color: "gray", fontSize: "12px", marginLeft: "5px" }}>
            Snapdeal is India's leading pure-play value Ecommerce platform.
            Founded in 2010 by Kunal Bahl and Rohit Bansal, Snapdeal is one of
            the top four online lifestyle shopping destinations of India.
            Snapdeal brings together a wide assortment of good quality and
            value- priced merchandise on its platform. Snapdeal's vision is to
            enable the shoppers of Bharat to experience the joy of living their
            aspirations through reliable, value-for-money shopping. With a
            personalized, multilingual interface and cutting edge technology,
            Snapdeal has simplified the shopping experience for its
            value-conscious buyers by showcasing the most relevant products-
            products that are a good functional fit with their needs and of a
            quality that lasts- thereby delivering true value to its customers.
            With its commitment to high service standards, Snapdeal suppliers
            operate under a well structured ecosystem that enables them to offer
            great quality products at affordable prices. With majority of the
            value-seeking, middle-income, price-conscious buyers coming from the
            non-metros, Snapdeal’s logistics networks powered by third party
            logistics cover more than 96% of India’s pin codes enabling order
            deliveries to more than 2500 towns and cities and expanding.
            Further, Snapdeal's mission is to become India’s value lifestyle
            omni-channel leader. We are excited about continuing to build a
            complete ecosystem around value commerce, where we can serve Bharat
            consumers wherever they are on their offline to online shopping
            journey. Snapdeal is part of the AceVector Group and one of India’s
            best-known e-commerce companies with an exclusive focus on the value
            segment.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer

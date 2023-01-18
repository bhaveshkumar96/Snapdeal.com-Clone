import styles from "./Navbar.module.css";
export const Footer = () => {
  return (
    <div>
        <div className={styles.secure}>
        <div className={styles.cardsitems}>
          <div className={styles.cards}>
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <h3>100% SECURE PAYMENTS</h3>
            <p>Moving your card details to a much more</p>
            <p>secured place</p>
          </div>
          <div className={styles.cards}>
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <h3>TRUSTPAY</h3>
            <p>100% Payment Protection. Easy</p>
            <p>Return Policy</p>
          </div>
          <div className={styles.cards}>
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <h3>HELP CENTER</h3>
            <p>Got a question? Look no further.</p>
            <p>Browse our FAQs or submit your query here.</p>
          </div>
          <div className={styles.cards}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAvCAYAAACCLMghAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMToxMjoxNSAxMjozNTo1NEDSUKQAAALjSURBVFhH7ZjPTxNREMfndaHYFg1gwkVMoHAwGCNQDInWg/FHYowU0cpFQuIvJCb6D+jBKwYT9aBwU0+yitQLB/UgVhKIFX8k4KG0jQIxxEiB0k2h5bnzGBdWLBSoctlP0sybme3M9715TdqCwUbDyGo4HI7MuW32ds74ERMwC+dLn0kVxoDPAVcYZy9MIwG3z+ebpZSGrnhVjds5y1kX5zzbXlTES+wlLHtzNmVXT2QqAv6AnweCQaYSyWT8aG+n7KW0QBOAO+cFxT+tFqut6eIlVr67jDLrp//jB7jXdp9Hleg0Gx7KW3wSJrIgjl3d+XLNY7EYhMNh3UtRFMqqO45EIDwRJm8BrId1sb7aR6awIIMs4MyLC+1cffivM4/NzEDT1ctCxGIkkwlamltgdHQUmm/dFLHqY8eh7tRpsf4NisCxDoUChykk0ATghcOZk7uELLMZzjWchYnJCYrMY7VYYGtuHtisVmg4Uw/xeAIqyiooqwfrB0NBC7kCrWF5tZvX1pyAk65aiqSfp54O6Oh8Bv3PZa2vdgc2CkOAIcAQYAgwBBgCDAGGAEOAIWDDBei+ljv3OWH/XidF0s+bHi9433p1X8t1Amj5z0kqwFWZAy5HLkXSj8c3Dp534eQCGg/lQ+PBfIqkn9ZXY9D6ciw9v4wedP+A860BYdfDmgT0+SNwu+s7vA9FhUV/rWgCGHAlPJ0gb3nGp+O0mudPPxlYH/uQK9AEcMa+fP4WTUnBgZ1boNJuE2u06KfCp6/RBPYhV7AwAg6PBoYVqXtwigLJMWeYoO1CEfTcKBUW/ZV4PTAJgyOKxIA9pJBAe2dJFtxhjPddk4fjqYhANplXboxg8+tPRuJYv9jM71JYoH0ckCpXXeEsJNo5Z3tKCyyJXdutUo5NouzqwZnjsYudq80zQarr9TwOUVqgE4C43W7JH4Mraqaecb6DA9P9pbIa8MLhzPHYceeyLKd2yw3+HwC/AEPNJ+gDNsFyAAAAAElFTkSuQmCC"
              alt=""
            />
            <h3>SHOP ON THE GO</h3>
            <p>Download the app and get exciting</p>
            <p>app only offers at your fingertips</p>
          </div>
        </div>
      </div>
      <div className={styles.footer1}>
        <div className={styles.footCard}>
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
        </div>
      </div>
      {/* <!-- ------payments---- --> */}
      <div className={styles.payments}>
        <div className={styles.pay}>
          <h2>PAYMENTS</h2>
          <div className={styles.icons}>
            <i>
              {" "}
              <img
                width={"10%"}
                src="https://img.icons8.com/color/48/null/mastercard-credit-card.png"
              />
            </i>
            <i>
              <img
                width={"10%"}
                src="https://img.icons8.com/ios/50/null/visa.png"
              />
            </i>
            <i>
              <img
                width={"10%"}
                src="https://img.icons8.com/fluency/48/null/paypal.png"
              />
            </i>
            <i>
              <img
                width={"10%"}
                src="https://img.icons8.com/emoji/48/null/credit-card-emoji.png"
              />
            </i>
            <i>
              <img
                width={"10%"}
                src="https://img.icons8.com/ios-filled/50/null/apple-pay.png"
              />
            </i>
          </div>
        </div>
        <div className={styles.social}>
          <h2>CONNECT</h2>
          <div className={styles.icons}>
            <i>
              <img
                width={"10%"}
                src="https://img.icons8.com/fluency/48/null/facebook-new.png"
              />
            </i>
            <i>
              <img
                width={"10%"}
                src="https://img.icons8.com/color/48/null/youtube-play.png"
              />
            </i>
            <i>
              <img
                width={"10%"}
                src="https://img.icons8.com/color/48/null/twitter--v1.png"
              />
            </i>
            <i>
              <img
                width={"10%"}
                src="https://img.icons8.com/color/48/null/instagram-new--v1.png"
              />
            </i>
            <i>
              <img
                width={"10%"}
                src="https://img.icons8.com/color/48/null/pinterest--v1.png"
              />
            </i>
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
          <p>
            <b>Men:</b> Shirts for Men / Casual Shirts for Men / Formal Shirts
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
              marginLeft: "15px",
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

import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import styles from "./AdminPortal.module.css";
import { AdminProductCard } from "./AdminProductCard";
import SimpleSidebar from "./TestAdmin";
export const AdminPortal = () => {
  // const products = [
  //     {
  //         "name": "N95 White Face Mask Reusable SDL636079837",
  //         "mrp": "159",
  //         "price": "129",
  //         "discount": "10",
  //         "img": "https://n1h2.sdlcdn.com/imgs/j/l/3/large/N95-White-Face-Mask-Reusable-SDL636079837-1-efb91.webp"
  //     },
  //     {
  //         "name": "Vighnraj Jewels Circular Blue Colored SDL992834142",
  //         "mrp": "259",
  //         "price": "159",
  //         "discount": "61",
  //         "img": "https://n1h2.sdlcdn.com/imgs/j/x/9/large/Vighnraj-Jewels-Circular-Blue-Colored-SDL992834142-1-29260.webp"
  //     },
  //     {
  //         "name": "Scotlon Krishna with Cute Calf SDL923415679",
  //         "mrp": "199",
  //         "price": "123",
  //         "discount": "81",
  //         "img": "https://n1h2.sdlcdn.com/imgs/f/4/5/large/Scotlon-Krishna-with-Cute-Calf-SDL923415679-3-06886.webp"
  //     },
  //     {
  //         "name": "HVBK Cotton Blend Grey Self Design T-Shirt",
  //         "mrp": "799",
  //         "price": "289",
  //         "discount": "64",
  //         "img": "https://n1h2.sdlcdn.com/imgs/j/r/3/large/HVBK-Cotton-Blend-Grey-Self-SDL663200475-1-65025.webp"
  //     },
  //     {
  //         "name": "Shiv Shakti Kavach 5 Mala With Shiv Trishul",
  //         "mrp": "699",
  //         "price": "130",
  //         "discount": "81",
  //         "img": "https://n1h2.sdlcdn.com/imgs/j/a/8/large/Shiv-Shakti-Kavach-5-Mala-SDL443330653-1-a0955.webp"
  //     },
  //     {
  //         "name": "Sambhav Deals PU Tan Formal Regular Wallet",
  //         "mrp": "1299",
  //         "price": "143",
  //         "discount": "89",
  //         "img": "https://n1h2.sdlcdn.com/imgs/j/m/d/large/Sambhav-Deals-PU-Tan-Formal-SDL622747316-1-0fc45.webp"
  //     },
  //     {
  //         "name": "Vastu Laughing buddha",
  //         "mrp": "499",
  //         "price": "223",
  //         "discount": "38",
  //         "img": "https://n1h2.sdlcdn.com/imgs/b/2/y/large/Vastu-Laughing-buddha-SDL982981024-1-34a94.webp"
  //     }
  // ]
  return (
    <>
      {/* <Navbar /> */}
      {/* <div>
        <h3 style={{ marginTop: "20px", marginBottom: "30px" }}>ADD PRODUCT</h3>
        <form>
          <input
            type="text"
            placeholder="Enter Product Name"
            size={50}
            // className={styles.formInput}
          />
          <br />
          <input
            type="link"
            placeholder="Enter Product Image url"
            size={50}
            // className={styles.formInput}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Product Price"
            size={50}
            // className={styles.formInput}
          />
          <br />
          <input
            type="submit"
            size={50}
            style={{
              paddingLeft: "30px",
              paddingRight: "30px",
              cursor: "pointer",
            }}
          />
        </form>
      </div> */}
      <div className={styles.AdminProdcutCard}>
        {/* {products.map((el) => {
          return <AdminProductCard {...el} />;
        })} */}
        {/* <AdminProductCard /> */}
      </div>
      <SimpleSidebar/>
      {/* <Footer /> */}
    </>
  );
};

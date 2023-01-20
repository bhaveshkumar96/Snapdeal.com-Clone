import { Button, FormControl, FormLabel, Image, Input } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import { addAdminData, getAdminData } from "../Redux/Admin/action";
import styles from "./AdminPortal.module.css";
import { useDispatch, useSelector } from "react-redux";
export const AdminPortal = () => {
  const adminData = useSelector((store) => store.AdminReducer.adminData);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    dispatch(getAdminData);
  }, []);

  //console.log(adminData);
  // const products = [
  //   {
  //     name: "N95 White Face Mask Reusable SDL636079837",
  //     mrp: "159",
  //     price: "129",
  //     discount: "10",
  //     img: "https://n1h2.sdlcdn.com/imgs/j/l/3/large/N95-White-Face-Mask-Reusable-SDL636079837-1-efb91.webp",
  //   },
  //   {
  //     name: "Vighnraj Jewels Circular Blue Colored SDL992834142",
  //     mrp: "259",
  //     price: "159",
  //     discount: "61",
  //     img: "https://n1h2.sdlcdn.com/imgs/j/x/9/large/Vighnraj-Jewels-Circular-Blue-Colored-SDL992834142-1-29260.webp",
  //   },
  //   {
  //     name: "Scotlon Krishna with Cute Calf SDL923415679",
  //     mrp: "199",
  //     price: "123",
  //     discount: "81",
  //     img: "https://n1h2.sdlcdn.com/imgs/f/4/5/large/Scotlon-Krishna-with-Cute-Calf-SDL923415679-3-06886.webp",
  //   },
  //   {
  //     name: "HVBK Cotton Blend Grey Self Design T-Shirt",
  //     mrp: "799",
  //     price: "289",
  //     discount: "64",
  //     img: "https://n1h2.sdlcdn.com/imgs/j/r/3/large/HVBK-Cotton-Blend-Grey-Self-SDL663200475-1-65025.webp",
  //   },
  //   {
  //     name: "Shiv Shakti Kavach 5 Mala With Shiv Trishul",
  //     mrp: "699",
  //     price: "130",
  //     discount: "81",
  //     img: "https://n1h2.sdlcdn.com/imgs/j/a/8/large/Shiv-Shakti-Kavach-5-Mala-SDL443330653-1-a0955.webp",
  //   },
  //   {
  //     name: "Sambhav Deals PU Tan Formal Regular Wallet",
  //     mrp: "1299",
  //     price: "143",
  //     discount: "89",
  //     img: "https://n1h2.sdlcdn.com/imgs/j/m/d/large/Sambhav-Deals-PU-Tan-Formal-SDL622747316-1-0fc45.webp",
  //   },
  //   {
  //     name: "Vastu Laughing buddha",
  //     mrp: "499",
  //     price: "223",
  //     discount: "38",
  //     img: "https://n1h2.sdlcdn.com/imgs/b/2/y/large/Vastu-Laughing-buddha-SDL982981024-1-34a94.webp",
  //   },
  // ];
  //console.log(name, price, imageUrl);
  const handleAddData = (e) => {
    e.preventDefault();
    let newData = {
      name,
      imageUrl,
      price,
    };

    dispatch(addAdminData(newData)).then((res) => {
      dispatch(getAdminData);
      console.log(newData);
    });
    setName("");
    setImageUrl("");
    setPrice("");
  };

  return (
    <>
      <Navbar />
      <div style={{ width: "40%", margin: "auto" }}>
        <h3 style={{ marginTop: "20px", marginBottom: "30px" }}>ADD PRODUCT</h3>

        <form onSubmit={handleAddData}>
          <FormLabel>Name</FormLabel>
          <Input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormLabel>Price</FormLabel>
          <Input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <FormLabel>Image URL</FormLabel>
          <Input
            type="text"
            mb={"25px"}
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <Input type={"submit"} />
        </form>
      </div>

      {/* {adminData.length > 0 && adminData.map((el)=>{
  return <AdminProductCard  {...el}/>
})} */}
      <div className={styles.AdminProdcutCard}>
        <TableContainer>
          <Table size="sm" variant="striped" colorScheme="linkedin">
            <Thead border={"1px solid white"} bgColor="blue.500">
              <Tr>
                <Th color={"white"} fontSize="15px">
                  S. NO.
                </Th>
                <Th color={"white"} fontSize="15px">
                  Name
                </Th>
                <Th color={"white"} fontSize="15px">
                  Price
                </Th>
                
                <Th color={"white"} fontSize="15px">
                  EDIT
                </Th>
                <Th color={"white"} fontSize="15px">
                  DELETE
                </Th>
                
              </Tr>
            </Thead>
            {adminData.length > 0 &&
              adminData.map((el) => {
                return (
                  <Tbody>
                    <Tr key={el.name}>
                      <Td>{el.id} </Td>
                      <Td key={el.price}>  {el.name}</Td>
                      <Td>{el.price}</Td>
                      
                      <Td>
                        {" "}
                        <button
                          style={{
                            border: "1px solid black",
                            padding: "5px 10px 5px 10px",
                            marginLeft:""
                          }}
                        >
                          EDIT
                        </button>{" "}
                      </Td>
                      <Td>
                        {" "}
                        <button
                          style={{
                            border: "1px solid black",
                            padding: "5px 10px 5px 10px",
                          }}
                        >
                          DELETE
                        </button>{" "}
                      </Td>
                    </Tr>
                  </Tbody>
                );
              })}
          </Table>
        </TableContainer>
      </div>

      <Footer />
    </>
  );
};

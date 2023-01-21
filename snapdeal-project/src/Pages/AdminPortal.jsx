import { Button, ButtonGroup, FormControl, FormLabel, Image, Input } from "@chakra-ui/react";
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
import SidebarWithHeader from "./SidebarWithHeader";
export const AdminPortal = () => {
  const adminData = useSelector((store) => store.AdminReducer.adminData);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    dispatch(getAdminData);
  }, []);
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
  console.log(adminData);
  return (
    <>
      {/* <Navbar /> */}
      <SidebarWithHeader />
      <div style={{ width: "40%", margin: "auto" }}>
        <h3
          style={{
            marginTop: "20px",
            marginBottom: "30px",
            fontWeight: "bolder",
            fontSize: "20px",
          }}
        >
          ADD PRODUCT
        </h3>

        <form onSubmit={handleAddData} margin="auto">
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
          <Input
            type={"submit"}
            border="1px solid black"
            fontSize={"20px"}
            marginBottom="35px"
            cursor={"pointer"}
          />
        </form>
      </div>

      {/* {adminData.length > 0 && adminData.map((el)=>{
  return <AdminProductCard  {...el}/>
})} */}
      <div className={styles.AdminProdcutCard}>
        <TableContainer ml={"200px"} >
          <Table variant='striped' colorScheme='teal' >
            <Thead bgColor={"blue.400"} >
              <Tr >
                <Th color="white">S. No.</Th>
                <Th color="white">Name</Th>
                <Th color="white" isNumeric>Price</Th>
                <Th color="white">Image</Th>
                <Th color="white">EDIT</Th>
                <Th color="white">DELETE</Th>
              </Tr>
            </Thead>
            {adminData.length > 0 &&
              adminData.map((el) => {
                return (
                  <Tbody>
                    <Tr>
                      <Td>{el.id} </Td>
                      <Td> {el.name}</Td>
                      <Td isNumeric> {el.price} </Td>
                      <Td>
                        {" "}
                        <img src={el.image} />{" "}
                      </Td>
                      <Td  >
                        {" "}
                        <Button bgColor="" >EDIT</Button>{" "}
                      </Td>
                      <Td>
                        {" "}
                        <Button>DELETE</Button>{" "}
                      </Td>
                    </Tr>
                  </Tbody>
                );
              })}
          </Table>
        </TableContainer>
      </div>
      {/* 
      <Footer /> */}
    </>
  );
};

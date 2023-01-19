import { HStack } from "@chakra-ui/react";

export const AdminProductCard = ({name,mrp,price,discount,img}) => {
   
  return (
    <>
      {/* <HStack w={"100%"}>
        <Image
        width={"10%"}
          alt="qwq"
          src="https://cdn.shopify.com/s/files/1/1002/7150/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077"
        />
        <Text>T-Shirt</Text>
        <Text>1212</Text>
        <Button>EDIT</Button>
        <Button>DELETE</Button>
      </HStack> */}
      <HStack style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",gap:"25px"}}>
      <img
        src={img}
        alt="Caffe Latte"
      />

      <h6>{name}</h6>
      <p>{price}</p>

<div>
<button
        style={{
          border: "1px solid black",
          padding: "5px",
          paddingRight: "20px",
          paddingLeft: "20px",
          marginLeft: "30px",
        }}
      >
        EDIT
      </button>
      <button
        style={{
          border: "1px solid black",
          padding: "5px",
          paddingRight: "15px",
          paddingLeft: "15px",
          marginLeft: "30px",
        }}
      >
        DELETE
      </button>
</div>
      
      </HStack>
     
    </>
  );
};

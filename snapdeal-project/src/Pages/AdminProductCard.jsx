import { Button, HStack, Image, Text } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
export const AdminProductCard = ({ name, price }) => {
  return (
    <>
      <TableContainer >
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Price</Th>

              <Th>EDIT</Th>
              <Th>DELETE</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{name}</Td>
              <Td>{price}</Td>
              <Td>
                <button>EDIT</button>{" "}
              </Td>
              <Td>
                <button>DELETE</button>{" "}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      {/* <HStack style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",gap:"25px"}}>
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
      
      </HStack> */}
    </>
  );
};

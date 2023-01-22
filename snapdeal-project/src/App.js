import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, dividerClasses } from '@mui/material'

//components

import DetailView from './Components/ItemDetails/DetailView';
import Cart from './Components/Cart/Cart';
import ProductDetail from './Components/ItemDetails/ProductDetail';
import ActionItem from './Components/ItemDetails/ActionItem';
import CartItem from './Components/Cart/CartItem';
import EmptyCart from './Components/Cart/EmptyCart';


function App() {
  return (
    <div>
    {/* <EmptyCart/> */}
      {/* <Cart/> */}
       {/* <ActionItem/> */}
    {/* <ProductDetail/> */}
    </div>
   
   // <DetailView/>
  //   <BrowserRouter>
  
  //   <Box style={{marginTop: 54}}>
  //     <Routes>
       
  //       <Route path= '/product/:id' element={<DetailView />} />
  //       <Route path= '/cart' element={<Cart />} />
  //     </Routes>
  //   </Box>
  // </BrowserRouter>
     
  );
}

export default App;
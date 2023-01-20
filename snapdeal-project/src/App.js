import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'

//components

import DetailView from './Components/ItemDetails/DetailView';
import Cart from './Components/Cart/Cart';


function App() {
  return (
    <BrowserRouter>
  
    <Box style={{marginTop: 54}}>
      <Routes>
       
        <Route path= '/product/:id' element={<DetailView />} />
        <Route path= '/cart' element={<Cart />} />
      </Routes>
    </Box>
  </BrowserRouter>
     
  );
}

export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'

//components

import DetailView from './Components/ItemDetails/DetailView';
import Cart from './Components/Cart/Cart';


function App() {
  return (
       <DetailView/>
      // <Cart/>
     
  );
}

export default App;
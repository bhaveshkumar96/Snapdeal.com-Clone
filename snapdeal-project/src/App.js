import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, dividerClasses } from '@mui/material'
import DetailView from './Components/ItemDetails/DetailView';
import ProductDetail from './Components/ItemDetails/ProductDetail';
import CartItem from './Components/Cart/CartItem';
import EmptyCart from './Components/Cart/EmptyCart';
import MainRoutes from './Pages/MainRoutes';


function App() {
  return (
    <div>
      <MainRoutes/>
    </div>


)
    }

export default App;
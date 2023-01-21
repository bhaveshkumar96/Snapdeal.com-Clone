import './App.css';
import { Navbar } from './Components/Navbar';
import { LandingPage } from './Components/LandingPage';
import { Footer } from './Components/Footer';
import { AdminPortal } from './Pages/AdminPortal';
import {PageNotFound} from './Components/PageNotFound';


function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <LandingPage/>
    <Footer/> */}
    {/* <AdminPortal/> */}
    <PageNotFound/>
    </div>
  );
}

export default App;

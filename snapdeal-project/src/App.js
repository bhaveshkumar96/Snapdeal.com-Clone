import './App.css';
import { Navbar } from './Components/Navbar';
import { LandingPage } from './Components/LandingPage';
import { Footer } from './Components/Footer';
import { AdminPortal } from './Pages/AdminPortal';


function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <LandingPage/>
    <Footer/> */}
    <AdminPortal/>
    </div>
  );
}

export default App;

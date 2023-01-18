import './App.css';
import { Navbar } from './Components/Navbar';
import { LandingPage } from './Components/LandingPage';
import { Footer } from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
    <Footer/>
    </div>
  );
}

export default App;

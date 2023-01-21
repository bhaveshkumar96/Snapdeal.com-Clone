// import logo from "./logo.svg";
import "./App.css";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Signup";
import Allroutes from "./routes/Allroutes";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <SignUp /> */}
      <Allroutes />
      <Checkout />
    </div>
  );
}

export default App;

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Appcontext } from "../context/Appcontext";
// import { Appcontext } from "../context/Appcontext";

const Protected = ({ children }) => {
  const { isAuth } =
    useContext(Appcontext) || localStorage.getItem("authToken");
  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default Protected;
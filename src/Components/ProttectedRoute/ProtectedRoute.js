import { useState } from "react";
import { Navigate } from "react-router-dom";
//children are the props
const Protected = ({ children }) => {
  const loggedIn = localStorage.getItem("islogged");
  const [logged, setLogged] = useState(loggedIn);
  return logged ? children : <Navigate to="/" replace />;
};
export default Protected;

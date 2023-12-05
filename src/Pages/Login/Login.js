import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { adminLogin } from "../../service/allApis";
import { useDispatch } from "react-redux";
import { loginDataDetails } from "../../Redux/authSlice";
import { toggleButton } from "../../Components/Context/ButtonToggleContext";

const Login = () => {
  //ccalling context here
  const { setLoggedIn } = useContext(toggleButton);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  // const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginData;
    if (email == "" || password == "") {
      alert("please add username and password");
    } else {
      const result = await adminLogin(loginData);
      //console.log("result", result.data.user.isAdmin);
      if (result.status >= 200 && result.status < 300) {
        setLoggedIn(true);
        dispatch(loginDataDetails(result.data));
        localStorage.setItem("islogged", result.data.user.isAdmin);
        navigate("/");
      } else {
        alert("unable to login");
      }
    }
  };
  return (
    <div className="login__wrapper">
      <div className="login__container">
        <div className="login_left_section ">
          <img
            id="t6"
            className="login__image__Style"
            src="https://i.postimg.cc/KvyYWXd5/chef1.png"></img>
        </div>

        <div className="login_right_section">
          {/* <Form.Label htmlFor="inputPassword5">Email</Form.Label> */}
          <Form.Control
            style={{ width: "94%" }}
            className="login__input__style"
            type="email"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            placeholder="Email address"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          {/* <Form.Label htmlFor="inputPassword5">Password</Form.Label> */}
          <Form.Control
            style={{ width: "94%" }}
            className="login__input__style"
            type="password"
            id="inputPassword5"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <Button
            style={{
              marginTop: "23px",
              width: "95%",
              height: "53px",
              backgroundColor: "orangered",
              border: "none",
            }}
            onClick={handleLogin}
            className="mb-4">
            SIGN IN
          </Button>
          <div className="account__check">
            <hr className="line__style" color="black" />
            <p className="account__style"> Don't have an account? </p>
            <hr className="second__line" />
          </div>

          <Link to={"/signup"} style={{ textDecoration: "none", width: "95%" }}>
            <Button
              style={{ backgroundColor: "orangered", border: "none" }}
              className="mb-4 signup__button-style">
              SIGN UP
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

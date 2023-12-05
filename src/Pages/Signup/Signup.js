import React, { useState } from "react";
import "./signup.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { adminSignUp } from "../../service/allApis";
import { register } from "../../Redux/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [signupData, setLoginData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setLoginData({ ...signupData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, username } = signupData;
    if (email == "" || password == "" || username == "") {
      alert("please add username and password");
    } else {
      const result = await adminSignUp(signupData);
      console.log("result", result);
      if (result.status >= 200 && result.status < 300) {
        dispatch(register(result.data));
        navigate("/login");
      } else {
        alert("unable to resgister");
      }
    }
  };

  return (
    <div className="signup__wrapper">
      <div className="signup__container">
        <div className="signup_left_section ">
          <img
            id="t6"
            className="signup__image__Style"
            src="https://i.postimg.cc/KvyYWXd5/chef1.png"></img>
        </div>

        <div className="signup_right_section">
          <Form.Control
            name="username"
            style={{ width: "94%" }}
            className="signup__input__style"
            type="text"
            id="inputPassword5"
            placeholder=" username"
            onChange={(e) => handleChange(e)}
          />
          {/* <Form.Label htmlFor="inputPassword5">Email</Form.Label> */}
          <Form.Control
            name="email"
            style={{ width: "94%" }}
            className="signup__input__style"
            type="email"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            placeholder="Email address"
            onChange={(e) => handleChange(e)}
          />
          {/* <Form.Label htmlFor="inputPassword5">Password</Form.Label> */}
          <Form.Control
            name="password"
            style={{ width: "94%" }}
            className="signup__input__style"
            type="password"
            id="inputPassword5"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
          />
          {/* <Form.Label htmlFor="inputPassword5">Password</Form.Label> */}

          <Button
            onClick={handleSubmit}
            style={{
              marginTop: "23px",
              width: "95%",
              height: "53px",
              backgroundColor: "orangered",
              border: "none",
            }}
            className="mb-4">
            SIGN UP
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

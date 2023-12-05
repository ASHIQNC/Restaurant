import React, { useContext } from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";

import emailjs from "@emailjs/browser";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toggleButton } from "../Context/ButtonToggleContext";

const Header = () => {
  ///const { isLoggedIn, setLoggedIn } = useContext(toggleButton);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [message, setMessage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const isLoggedInData = localStorage.getItem("islogged");
  console.log("loggedin", isLoggedInData);

  const handleSubmit = (e) => {
    e.preventDefault();

    // add you emailjs service id ,templateid, publickey
    const serviceId = "service_j9dl1h9";
    const templateId = "template_5uuj2ag";
    const publicKey = "e6gtcaFxQjM-f8tDt";

    // creat an object that containe  dynamic template params

    const templateParams = {
      from_name: username,
      from_email: email,
      to_name: "ashiq",
      message: message,
    };

    //we can send email using emailjs library

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        console.log("emailsend successfuly", result);
        setEmail("");
        setMessage("");
        setUserName("");
        toast.success("Email send successfully ");
        handleClose();
      })
      .catch((error) => {
        toast.error("Unable to send");
      });
  };

  // for navigation
  const navigateUser = () => {
    navigate("/login");
  };

  // logout

  const logoutUser = () => {
    // setLoggedIn(false);
    navigate("/");
    localStorage.clear();
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="lg"
        className="navbar__container">
        <Container>
          <Navbar.Brand id="t2">
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
              <img
                id="t6"
                className="logo"
                src="https://i.postimg.cc/KvyYWXd5/chef1.png"></img>
              DELICI
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" navbar__content__style ">
              <Nav.Link className="navbar__heading-style">
                <Link className="link__style" to={"/"}>
                  {" "}
                  <a>Home</a>
                </Link>
              </Nav.Link>
              <Nav.Link className="navbar__heading-style">
                <Link to={"/menu"} className="link__style">
                  <a>Menu</a>
                </Link>
              </Nav.Link>
              <Nav.Link onClick={handleShow}>
                <a
                  style={{ textDecoration: "none" }}
                  className="navbar__heading-style">
                  {" "}
                  FeedBack
                </a>
              </Nav.Link>

              {/* <div> */}

              {/* <Nav.Link className="navbar__heading-style">
                    <button
                      style={{ border: "none", backgroundColor: "transparent" }}
                      className="link__style">
                      Login
                    </button>
                  </Nav.Link>
                  <Nav.Link className="navbar__heading-style">
                    <Link to={"/upload"} className="link__style">
                      <a>Food Upload</a>
                    </Link>
                  </Nav.Link> */}

              {/* login */}

              {/* <Nav.Link className="navbar__heading-style">
                    <button
                      style={{ border: "none", backgroundColor: "transparent" }}
                      className="link__style">
                      Logout
                    </button>
                  </Nav.Link>
                </div> */}

              {/* { */}

              {/* //  <div> */}

              {/* <Nav.Link className="navbar__heading-style">
                     <button
                       style={{ border: "none", backgroundColor: "transparent" }}
                       className="link__style">
                       Login
                     </button>
                   </Nav.Link>
                   <Nav.Link className="navbar__heading-style">
                     <Link to={"/upload"} className="link__style">
                       <a>Food Upload</a>
                     </Link>
                   </Nav.Link> */}

              {/* login */}

              {/* <Nav.Link className="navbar__heading-style">
                     <button
                       style={{ border: "none", backgroundColor: "transparent" }}
                       className="link__style">
                       Logout
                     </button>
                   </Nav.Link>
                 </div> */}
              {/* } */}

              {isLoggedInData ? (
                <div className="fileupload__wrapper">
                  <div className="navbar__heading-style mt-2">
                    <Link to={"/upload"} className="link__style">
                      <a>Food Upload</a>
                    </Link>
                  </div>

                  {/* login */}

                  <button
                    onClick={logoutUser}
                    style={{ border: "none" }}
                    className="link__style2">
                    Logout
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    onClick={navigateUser}
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      marginTop: "7px",
                    }}
                    className="link__style">
                    Login
                  </button>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} className="offcanvas__style">
        <Offcanvas.Header closeButton style={{ backgroundColor: "white" }}>
          <Offcanvas.Title>CONTACT US</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body style={{ backgroundColor: "lightgray" }}>
          <div className="form__image-style">
            <img
              src="https://i.postimg.cc/wBmdMs76/Untitled-design-removebg-preview-1.png"
              alt="img"
            />
          </div>
          <div class="mb-4">
            <Form.Control
              type="text"
              name="fname"
              required
              id="firstname"
              placeholder="enter your name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div class="mb-4">
            <Form.Control
              type="text"
              name="fname"
              required
              id="firstname"
              placeholder="email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* <div class="mb-4">
            <Form.Control
              type="text"
              name="fname"
              required
              id="firstname"
              placeholder=""
            />
          </div> */}
          <div class="mb-4">
            <Form.Control
              as="textarea"
              placeholder="Message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <Button
            onClick={handleSubmit}
            style={{ width: "100%", backgroundColor: "orangered" }}
            variant="danger">
            Send Message
          </Button>
        </Offcanvas.Body>
      </Offcanvas>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Header;

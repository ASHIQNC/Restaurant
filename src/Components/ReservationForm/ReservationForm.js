import React, { useState } from "react";
import "./reservation.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ReservationForm = () => {
  const [inputs, setInputs] = useState({
    fname: "",
    mobile: "",
    status: "",
    time: "",
    message: "",
  });

  const handleInput = (e) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  console.log("helloo", inputs);

  const handleSubmitData = (e) => {
    e.preventDefault();

    // add you emailjs service id ,templateid, publickey
    const serviceId = "service_j9dl1h9";
    const templateId = "template_sxyxbyi";
    const publicKey = "e6gtcaFxQjM-f8tDt";

    // creat an object that containe  dynamic template params

    const templateParams = {
      from_name: inputs.fname,
      to_name: "Resto Team",
      from_mobile: inputs.mobile,
      from_time: inputs.time,
      from_personnumber: inputs.status,
      message: inputs.message,
    };

    //we can send email using emailjs library

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        if (result.status >= 200 && result.status <= 300) {
          console.log("emailsend successfuly", result);
          setInputs({
            ...inputs,
            fname: "",
            mobile: "",
            status: "",
            time: "",
            message: "",
          });
          toast.success("Email send successfully ");
        } else {
          toast.error("Unable to send email ");
        }
      })
      .catch((error) => {
        toast.error("Unable to send");
      });
  };

  return (
    <div className="reservation-form__wrapper">
      <div className="reservation-form__left-section">
        <div className="reservation__form__header">
          <h1 className="text-center mt-5">Online Reservation</h1>
          <p className="text-center">
            Booking request{" "}
            <span style={{ color: "orangered" }}>+88-123-123456</span> or fill
            out the order form
          </p>
        </div>

        {/* form */}

        <div className="form__container">
          {/*  */}

          <div class="mb-4 fname__style">
            <Form.Control
              className="form__message2"
              onChange={(e) => {
                handleInput(e);
              }}
              type="text"
              name="fname"
              required
              id="firstname"
              placeholder="Your Name"
            />
          </div>
          <div class="mb-4  phone__style">
            <Form.Control
              className="form__message2"
              onChange={(e) => {
                handleInput(e);
              }}
              type="text"
              name="mobile"
              required
              id="mobile"
              placeholder="Phone Number"
            />
          </div>

          {/* dropdown */}

          <div class="mb-4 dropdown1__wrapper">
            <Form.Select
              className="dropdown__style"
              onChange={(e) => {
                handleInput(e);
              }}
              name="status"
              id="person"
              aria-label="Default select example">
              <option disabled>Choose Person</option>
              <option value={"1person"}>1Person</option>
              <option value={"2person"}>2Person</option>
              <option value={"3person"}>3Person</option>
              <option value={"4person"}>4Person</option>
            </Form.Select>
          </div>

          <div class="mb-4 dropdown1__wrapper">
            <Form.Select
              name="time"
              id="time"
              className="dropdown__style"
              onChange={(e) => {
                handleInput(e);
              }}
              aria-label="Default select example">
              <option>choose time</option>
              <option value={"8AM"}>8AM</option>
              <option value={"12PM"}>12PM</option>
              <option value={"4PM"}>4PM</option>
              <option value={"6PM"}>6PM</option>
            </Form.Select>
          </div>

          {/* message */}

          <div class="mb-4 message__wrapper">
            <Form.Control
              className="form__message"
              onChange={(e) => {
                handleInput(e);
              }}
              name="message"
              as="textarea"
              rows={3}
              placeholder="Message"
            />
          </div>
          {/* button */}

          <div className="button__style__reservation">
            <Button
              variant="danger"
              onClick={handleSubmitData}
              className="button__style__container__Wrapper">
              Book Now
            </Button>
          </div>
        </div>
      </div>

      <div className="reservation-form__right-section">
        <h6 style={{ color: "white" }} className="text-center mt-5">
          HOT DEAL
        </h6>
        <h6 style={{ color: "white" }} className="text-center mt-2">
          Lunch & Dinner
        </h6>
        {/* <div className="box__Wrapper">
          <div className="box__style">
            <p>up to</p>
            <h1 className="box__Style__font">41%</h1>
            <p>Discount</p>
          </div>
        </div> */}

        <div className="box__Container">
          <div className="box__Wrapper">
            <div className="box__style">
              <p>up to</p>
              <h1 className="box__Style__font">41%</h1>
              <p>Discount</p>
            </div>
          </div>
          <div className="rotated-box"></div>
        </div>

        <p style={{ color: "white" }} className="text-center mt-4">
          • Not valid for online order
        </p>
        <p style={{ color: "white" }} className="text-center mt-1">
          • Non-refundable
        </p>
      </div>

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

export default ReservationForm;

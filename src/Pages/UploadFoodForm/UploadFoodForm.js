import React, { useState } from "react";
import "./uploadfood.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addFoodData } from "../../service/allApis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const UploadFoodForm = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    productname: "",
    discription: "",
    category: "",
    price: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  //state to store image
  const [image, setImage] = useState("");
  //state to hold image preview url
  // const [imgPreview, setImgPreview] = useState("");
  const imageChoose = (e) => {
    setImage(e.target.files[0]);
  };

  const handleData = async (e) => {
    e.preventDefault();
    const { productname, discription, category, price } = inputs;
    if (
      productname == "" ||
      discription == "" ||
      category == "" ||
      price == "" ||
      image == ""
    ) {
      toast.error("please add username and password");
    } else {
      //setting header
      const headerConfig = {
        "Content-Type": "multipart/form-data",
      };

      //file type content sent chyumpo nammal form data typil aayirikanm body akath send cheyunnath
      //for that formtype body object create cheyyanm ennit aakanam data send cheyandath
      const data = new FormData();
      console.log("data", data);

      data.append("productname", productname);
      data.append("discription", discription);
      data.append("category", category);
      data.append("price", price);
      //nammal backend routes akath(multer use cheytha same name thanne key aayit kodukanam)
      data.append("user_profile", image);

      const result = await addFoodData(data, headerConfig);
      if (result.status >= 200 && result.status <= 300) {
        toast.success("data added ");
        setInputs({
          ...inputs,
          productname: "",
          discription: "",
          category: "",
          price: "",
        });
        setImage("");
        navigate("/menu");
      } else {
        console.log("unable to post");
      }
    }
  };
  return (
    <>
      <div className="signup-wraper">
        <div className="signup-box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="mt-5 upload__container">
        <div className="upload-form__Wrapper">
          <h1 id="t5" className="text-center mb-5">
            Upload Food Detail
          </h1>
          {/* type of food */}

          <div className="upload__form-content">
            <div class="mb-5">
              <Form.Control
                onChange={(e) => handleChange(e)}
                className="input__style__wrapper"
                type="text"
                id="inputPassword5"
                name="productname"
                aria-describedby="passwordHelpBlock"
                placeholder="Food Name"
              />
            </div>

            <div class="mb-5">
              <Form.Control
                onChange={(e) => handleChange(e)}
                className="input__text-area__style"
                name="discription"
                as="textarea"
                rows={4}
                placeholder="Discription"
              />
            </div>

            <div class="mb-5">
              <Form.Control
                onChange={(e) => handleChange(e)}
                className="input__style__wrapper"
                type="text"
                id="inputPassword5"
                name="price"
                aria-describedby="passwordHelpBlock"
                placeholder="Enter the Price"
              />
            </div>
            <div class="mb-5">
              <Form.Control
                onChange={(e) => handleChange(e)}
                className="input__style__wrapper"
                type="text"
                id="inputPassword5"
                name="category"
                aria-describedby="passwordHelpBlock"
                placeholder="Enter the category"
              />
            </div>

            <div class="mb-5">
              <input
                onChange={(e) => imageChoose(e)}
                name="image"
                class="block w-full text-sm text-slate-500
                       file:mr-4 file:py-2 file:px-4 file:rounded-md
                       file:border-0 file:text-sm file:font-semibold
                       file:bg-pink-50 file:text-pink-700
                       hover:file:bg-pink-100 input__style__wrapper"
                type="file"
              />
            </div>

            <Button
              onClick={handleData}
              variant="danger"
              className="button__Style"
              type="button">
              Submit
            </Button>
          </div>
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
    </>
  );
};

export default UploadFoodForm;

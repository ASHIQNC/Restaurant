import React, { useEffect, useState } from "react";
import "./singlepage.css";
import image from "../../assets/remove.png";
import { Link, useParams } from "react-router-dom";
import { getsingleFoodDetails } from "../../service/allApis";
import { BASE_URL } from "../../service/base_url";

const SinglePage = () => {
  // create a state to hold data
  const [singleData, setSingleData] = useState("");
  const { id } = useParams();

  const singleFoodData = async () => {
    const result = await getsingleFoodDetails(id);
    // console.log("result", result);
    setSingleData(result.data);
  };

  console.log(singleData);

  useEffect(() => {
    singleFoodData();
  }, []);

  return (
    <div className="single__page__wrapper">
      <div className="single__Wrapper__content">
        {/* image */}
        <div className="single__Wrapper_top-section"></div>
        {/*header section  */}
        <div className="single__header__wrapper">
          <img
            id="t6"
            style={{ height: "63px" }}
            className="single__header__Wrapper__image"
            class="rounded-t-lg"
            src={image}
            alt=""
          />
          <div>
            <h1 className="single__header__Style">DELICI</h1>
            <p className="single__sub-header">RESTUARENT</p>
          </div>
        </div>

        {/* second section */}
        <div className="single__header__second-section">
          <h6 className=" text-center mt-3 flavour-section__style">
            DELIGHTFUL EXPERIENCE
          </h6>
          <h1 className="text-center mt-4 single__second__Section__menu ">
            Where Every Flavour Tells A Story
          </h1>

          <h6 className=" text-center mt-3 flavour-section__style">
            Come with family & feel the joy of mouthwatering food
          </h6>
        </div>
      </div>

      {/* single card section */}

      <div className="single__card__content">
        <div className="single__container__left-section">
          <img
            className="single__image__style"
            src={`${BASE_URL}/foodimage/${singleData.image}`}
            alt="food"
          />
        </div>
        <div className="single__container__right-section">
          <h6 className="mt-3 flavour-section__style">{singleData.category}</h6>

          <h2 className="single__heading-style">{singleData.productname}</h2>
          <p className="single__para-style">{singleData.discription}</p>

          <div style={{ display: "flex" }}>
            <h6 style={{ marginTop: "6px", marginRight: "17px" }}>
              ${singleData.price}.00{" "}
            </h6>
            <h4 style={{ color: "orangered" }}>$80.00</h4>
          </div>
          <Link to={"/menu"}>
            <button className="single-page__button__style__wrapper">
              View Our Menu
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;

{
  /* <div className="single__container__wrapper">
<div className="single__container__left-section">
  <img
    className="single__image__style"
    src="https://i.postimg.cc/JnPr9zQz/stories-v1r-Uvn-VMMk-M-unsplash.jpg"
    alt="food"
  />
</div>
<div className="single__container__right-section">
  <h6 className="mt-3 flavour-section__style">CHEF SELECTION</h6>

  <h2 className="single__heading-style">Lobster Tortellini</h2>
  <p className="single__para-style">
    Lorem Ipsum is simply dummy text of the printingand typesetting
    industry lorem Ipsum has been the industrys standard dummy text ever
    since the when an unknown printer took a galley of type.
  </p>

  <div style={{ display: "flex" }}>
    <h6 style={{ marginTop: "6px", marginRight: "17px" }}>$40.00 </h6>
    <h4 style={{ color: "orangered" }}>$80.00</h4>
  </div>
</div>
</div> */
}

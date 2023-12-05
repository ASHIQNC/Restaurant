import React, { useEffect, useState } from "react";
import "./menu.css";
import image from "../../assets/remove.png";
import ReservationForm from "../../Components/ReservationForm/ReservationForm";
import { getFoodData } from "../../service/allApis";
import { BASE_URL } from "../../service/base_url";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const getData = async () => {
    const result = await getFoodData();
    console.log(result);

    setData(result.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const singleData = (id) => {
    navigate(`/fooddetail/${id}`);
  };
  return (
    <div className="mt-5 menu__Wrapper">
      <div className="menu__Wrapper__content">
        {/* image */}
        <div className="menu__Wrapper_top-section"></div>

        {/*header section  */}
        <div className="menu__header__wrapper">
          <img
            id="t6"
            style={{ height: "63px" }}
            className="menu__header__Wrapper__image"
            class="rounded-t-lg"
            src={image}
            alt=""
          />
          <div>
            <h1 className="menu__header__Style">DELICI</h1>
            <p className="menu__sub-header">RESTUARENT</p>
          </div>
        </div>

        {/* second section */}
        <div className="menu__header__second-section">
          <h6 className=" text-center mt-3 flavour-section__style">
            FLAVOURS OF ROYALTY
          </h6>
          <h1 className="text-center mt-4 second__Section__menu ">Our Menu</h1>
        </div>
      </div>

      {/* menu content section */}
      <div className="menu__content__section-wrapper">
        <div className="menu__food__Section">
          <h6 className=" text-center mt-3 flavour-section__style">
            SPECIAL OFFER
          </h6>
          <h1 className="text-center mt-4 second__Section__menu ">
            Best Special Menu
          </h1>

          {/* cadr */}
          <div className="menu__card__Wrapper">
            {/* card1 */}
            {data.length > 0 ? (
              data.map((i) => (
                <div
                  className="menu__container-image__section1"
                  onClick={() => {
                    singleData(i._id);
                  }}>
                  <img
                    id="t5"
                    style={{ borderRadius: "10px" }}
                    className="breakfast__style1"
                    src={`${BASE_URL}/foodimage/${i.image}`}
                    alt=""
                  />
                  <h3 id="t4" style={{ color: "white" }} className="mt-4">
                    {i.productname}
                  </h3>
                  <p
                    style={{ color: "white" }}
                    class="mb-3 font-normal text-gray-700 dark:text-gray-400 menu__para__style">
                    {i.discription}
                  </p>
                  <h4 style={{ color: "orangered" }} className="text-center">
                    ${i.price}.00
                  </h4>
                </div>
              ))
            ) : (
              <h1>No Data</h1>
            )}
            {/* <div className="menu__container-image__section1">
              <img
                id="t5"
                style={{ borderRadius: "10px" }}
                className="breakfast__style1"
                src="https://i.postimg.cc/nc4xPzQT/kobby-mendez-id-Tw-DKt2j2o-unsplash.jpg"
                alt=""
              />
              <h3 id="t4" style={{ color: "white" }} className="mt-4">
                Butternut Pumpkin
              </h3>
              <p
                style={{ color: "white" }}
                class="mb-3 font-normal text-gray-700 dark:text-gray-400 menu__para__style">
                Lorem Ipsum is simply dummy text of the printingand dummy text
                of the printingand
              </p>
              <h4 style={{ color: "orangered" }} className="text-center">
                $80.00
              </h4>
            </div> */}

            {/* 2 */}

            {/* <div className="menu__container-image__section1">
              <img
                id="t5"
                style={{ borderRadius: "10px" }}
                className="breakfast__style1"
                src="https://i.postimg.cc/VNGbpwVZ/sara-julie-9-Gz5b-MWd-GYE-unsplash.jpg"
                alt=""
              />
              <h3 style={{ color: "white" }} id="t4" className="mt-4">
                Greek Salad
              </h3>
              <p
                style={{ color: "white" }}
                class="mb-3 font-normal text-gray-700 dark:text-gray-400 menu__para__style">
                Lorem Ipsum is simply dummy text of the printingand dummy text
                of the printingand
              </p>
              <h4 style={{ color: "orangered" }} className="text-center">
                $50.00
              </h4>
            </div> */}

            {/* 3 */}

            {/* <div className="menu__container-image__section1">
              <img
                id="t5"
                style={{ borderRadius: "10px" }}
                className="breakfast__style1"
                src="https://i.postimg.cc/QNbr3MbM/chad-montano-GFCYho-Re48-unsplash.jpg"
                alt=""
              />
              <h3 style={{ color: "white" }} id="t4" className="mt-4">
                Opu Fish
              </h3>
              <p
                style={{ color: "white" }}
                class="mb-3 font-normal text-gray-700 dark:text-gray-400 menu__para__style">
                Lorem Ipsum is simply dummy text of the printingand dummy text
                of the printingand
              </p>
              <h4 style={{ color: "orangered" }} className="text-center">
                $60.00
              </h4>
            </div> */}

            {/* 4 */}

            {/* <div className="menu__container-image__section1">
              <img
                id="t5"
                style={{ borderRadius: "10px" }}
                className="breakfast__style1"
                src="https://i.postimg.cc/6qNfTWQQ/anna-tukhfatullina-food-photographer-stylist-Mzy-Ojt-CI70-unsplash.jpg"
                alt=""
              />
              <h3 style={{ color: "white" }} id="t4" className="mt-4">
                Olivas Rellenas
              </h3>
              <p
                style={{ color: "white" }}
                class="mb-3 font-normal text-gray-700 dark:text-gray-400 menu__para__style">
                Lorem Ipsum is simply dummy text of the printingand dummy text
                of the printingand
              </p>
              <h4 style={{ color: "orangered" }} className="text-center">
                $90.00
              </h4>
            </div> */}

            {/*  */}

            {/* <div className="menu__container-image__section1">
              <img
                id="t5"
                style={{ borderRadius: "10px" }}
                className="breakfast__style1"
                src="https://i.postimg.cc/prYm28rs/pexels-piotr-arnoldes-6493112.jpg"
                alt=""
              />
              <h3 style={{ color: "white" }} id="t4" className="mt-4">
                Tokusen Wagyu
              </h3>
              <p
                style={{ color: "white" }}
                class="mb-3 font-normal text-gray-700 dark:text-gray-400 menu__para__style">
                Lorem Ipsum is simply dummy text of the printingand dummy text
                of the printingand
              </p>
              <h4 style={{ color: "orangered" }} className="text-center">
                $40.00
              </h4>
            </div> */}
          </div>
        </div>
      </div>

      {/* footer section */}

      <div className="footer__container__wrapper">
        <div className="footer__container__left-section">
          <img
            className="footer__image__style"
            src="https://i.postimg.cc/JnPr9zQz/stories-v1r-Uvn-VMMk-M-unsplash.jpg"
            alt="food"
          />
        </div>
        <div className="footer__container__right-section">
          <h6 className="mt-3 flavour-section__style">CHEF SELECTION</h6>

          <h2 className="footer__heading-style">Lobster Tortellini</h2>
          <p className="footer__para-style">
            Lorem Ipsum is simply dummy text of the printingand typesetting
            industry lorem Ipsum has been the industrys standard dummy text ever
            since the when an unknown printer took a galley of type.
          </p>

          <div style={{ display: "flex" }}>
            <h6 style={{ marginTop: "6px", marginRight: "17px" }}>$40.00 </h6>
            <h4 style={{ color: "orangered" }}>$80.00</h4>
          </div>
        </div>
      </div>

      {/* reservationform */}

      <ReservationForm />
    </div>
  );
};

export default Menu;

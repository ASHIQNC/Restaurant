import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./home.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="container__wrapper">
        <div className="intro__Section mt-4">
          <div className="intro__right-section">
            <div className="button__style">
              <h6 className="button__heading__style">Bike Delivary</h6>
              <img
                className="scooter__style"
                src="https://i.postimg.cc/7PVGK01q/delivery-10.png"
                alt="bike"
              />
            </div>
            <h1 className="font__header-style">The Fastest Food</h1>
            <br />
            <h1 className="font__header-style">
              Delivery in <span style={{ color: "#F05941" }}>Accra</span>
            </h1>
            <p className="para__style">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              nam delectus sed, vel quaerat, libero nesciunt debitis, architecto
              repudiandae accusamus aut exercitationem nisi non doloribus!
              Temporibus officia architecto reiciendis blanditiis.
            </p>
          </div>
          <div className="intro__left-section">
            <div className="card__wrapper">
              <div className="card__container">
                <div class="card__container__Wrapper max-w-sm  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a className="card__image_style">
                    <img
                      style={{
                        position: "absolute",
                        height: "134px",
                        top: "-35px",
                      }}
                      id="t1"
                      class="rounded-t-lg"
                      src="https://i.postimg.cc/XvxqnLtY/f1-removebg-preview.png"
                      alt=""
                    />
                  </a>
                  <div className="card__sub__content">
                    <a href="#" class="text-decoration-none">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Strawberries
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Fresh Strawberries
                    </p>
                    <h5>₵ 7.25</h5>
                  </div>
                </div>

                {/* card 2 */}

                <div class="card__container__Wrapper max-w-sm  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a className="card__image_style">
                    <img
                      style={{
                        position: "absolute",
                        height: "134px",
                        top: "-35px",
                      }}
                      id="t1"
                      class="rounded-t-lg"
                      src="https://i.postimg.cc/9FkJp4tx/nathan-dumlao-8-Uv6ean-QWz-Y-unsplash-removebg-preview.png"
                      alt=""
                    />
                  </a>
                  <div className="card__sub__content">
                    <a href="#" class="text-decoration-none">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Chicken
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Mixed Kebab
                    </p>
                    <h5>₵ 7.25</h5>
                  </div>
                </div>

                <div class="card__container__Wrapper max-w-sm mt-4  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a className="card__image_style">
                    <img
                      style={{
                        position: "absolute",
                        height: "134px",
                        top: "-55px",
                      }}
                      id="t1"
                      class="rounded-t-lg"
                      src="https://i.postimg.cc/J4r9gBXM/pablo-merchan-montes-MXovq-M130-UI-unsplash-removebg-preview.png"
                      alt=""
                    />
                  </a>
                  <div className="card__sub__content">
                    <a href="#" class="text-decoration-none">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Ice Cream
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Chocolate & Vanila
                    </p>
                    <h5>₵ 7.25</h5>
                  </div>
                </div>

                {/* card4 */}
                {/* <div class="card__container__Wrapper max-w-sm  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a className="card__image_style">
                    <img
                      style={{
                        position: "absolute",
                        height: "134px",
                        top: "-31px",
                      }}
                      id="t1"
                      class="rounded-t-lg"
                      src="https://i.postimg.cc/XvxqnLtY/f1-removebg-preview.png"
                      alt=""
                    />
                  </a>
                  <div className="card__sub__content">
                    <a href="#" class="text-decoration-none">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Strawberries
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Fresh Strawberries
                    </p>
                    <h5>₵ 7.25</h5>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* we can offer */}
      <div className="offer__container">
        <h6 className=" text-center mt-3">FLAVOURS OF ROYALTY</h6>

        <div className="header__Section2">
          <h2 className="condition__header_style">We Offer Top Notch</h2>
          <p className="parastyle text-center">
            Lorem Ipsum is simply dummy text <br />{" "}
            <span style={{ marginLeft: "11px" }}>
              of the printing and typesetting{" "}
            </span>{" "}
            <span>industry lorem Ipsum</span>
          </p>
        </div>
        <div className="offer__container_wrapper">
          {/* image1 */}
          <div className="offer__container-image__section1">
            <img
              id="t1"
              className="breakfast__style"
              src="https://i.postimg.cc/nc4xPzQT/kobby-mendez-id-Tw-DKt2j2o-unsplash.jpg"
              alt=""
            />
            <h3 className="mt-4">Breakfast</h3>
          </div>

          {/* section2 */}
          <div className="offer__container-image__section2">
            <div className="header__Section">
              <h2>We Offer Top Notch</h2>
              <p className="parastyle text-center">
                Lorem Ipsum is simply dummy text <br />{" "}
                <span style={{ marginLeft: "11px" }}>
                  of the printing and typesetting{" "}
                </span>{" "}
                <span>industry lorem Ipsum</span>
              </p>
            </div>

            {/* imagesection */}
            <div className="section2__image_style">
              <img
                id="t1"
                className="appetizer__Style"
                src="https://i.postimg.cc/QNbr3MbM/chad-montano-GFCYho-Re48-unsplash.jpg"
                alt=""
              />

              <h3 className="mt-4">Appetizers</h3>
            </div>
          </div>
          <div className="offer__container-image__section3">
            <img
              id="t1"
              className="appetizer__Style"
              src="https://i.postimg.cc/VNGbpwVZ/sara-julie-9-Gz5b-MWd-GYE-unsplash.jpg"
              alt=""
            />
            <h3 className="mt-4">Drinks</h3>
          </div>
        </div>
      </div>

      {/* 3rd section */}
      <div className="background__image-style">
        <div className="lobster__Wrapper">
          <div className="lobster__wrapper__left-section">
            <img
              id="t3"
              className="lobster__image__style"
              src="https://i.postimg.cc/t4hDWDQF/sara-cervera-0-X6s-Ev-SJxas-unsplash-removebg-preview.png"
              alt=""
            />
          </div>

          <div className="lobster__wrapper__right-section">
            <h6 className="mt-3">SPECIAL DISH</h6>
            <h2 className="lobster__heading-style">Lobster Tortellini</h2>
            <p className="lobster__para-style">
              Lorem Ipsum is simply dummy text of the printingand typesetting
              industry lorem Ipsum has been the industrys standard dummy text
              ever since the when an unknown printer took a galley of type.
            </p>

            <div style={{ display: "flex" }}>
              <h6 style={{ marginTop: "6px", marginRight: "17px" }}>$40.00 </h6>
              <h4>$80.00</h4>
            </div>

            <Link to={"/menu"}>
              <button className="button__style__wrapper">View Our Menu</button>
            </Link>
          </div>
        </div>
      </div>

      {/* why you choose us */}
      <div className="choose__Wrapper">
        <div className="choose__wrapper__top-section">
          <h6 className=" text-center mt-4">WHY YOU CHOOSE US</h6>
          <h2 className="choose__header_style text-center mt-4">
            Our Strength
          </h2>
        </div>
        <div className="choose__wrapper__bottom-section">
          <div class="choose__card__container__Wrapper max-w-sm mt-4  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a className="choose__card__image_style">
              <img
                style={{
                  position: "absolute",
                  height: "74px",
                  top: "1px",
                }}
                id="t4"
                class="rounded-t-lg"
                src="https://i.postimg.cc/br0xb7k3/celebration-removebg-preview.png"
                alt=""
              />
            </a>
            <div className="choose__sub__content">
              <a href="#" class="text-decoration-none">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Event & Party
                </h5>
              </a>
              <p
                style={{ textAlign: "center", fontSize: "15px" }}
                class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem Ipsum is simply dummy text of the printingand dummy text
                of the printingand
              </p>
            </div>
          </div>

          {/* card2 */}

          <div class="choose__card__container__Wrapper max-w-sm mt-4  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a className="choose__card__image_style">
              <img
                style={{
                  position: "absolute",
                  height: "74px",
                  top: "1px",
                }}
                id="t4"
                class="rounded-t-lg"
                src="https://i.postimg.cc/9Qnkg9wZ/vegetables-removebg-preview.png"
                alt=""
              />
            </a>
            <div className="choose__sub__content">
              <a href="#" class="text-decoration-none">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Hygienic Food
                </h5>
              </a>
              <p
                style={{ textAlign: "center", fontSize: "15px" }}
                class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem Ipsum is simply dummy text of the printingand dummy text
                of the printingand
              </p>
            </div>
          </div>

          {/* card3 */}
          <div class="choose__card__container__Wrapper max-w-sm mt-4  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a className="choose__card__image_style">
              <img
                style={{
                  position: "absolute",
                  height: "74px",
                  top: "1px",
                }}
                id="t4"
                class="rounded-t-lg"
                src="https://i.postimg.cc/q7TcjMM4/freshenvironment-removebg-preview.png"
                alt=""
              />
            </a>
            <div className="choose__sub__content">
              <a href="#" class="text-decoration-none">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Fresh Environment
                </h5>
              </a>
              <p
                style={{ textAlign: "center", fontSize: "15px" }}
                class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem Ipsum is simply dummy text of the printingand dummy text
                of the printingand
              </p>
            </div>
          </div>

          {/* card 4 */}

          <div class="choose__card__container__Wrapper max-w-sm mt-4  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a className="choose__card__image_style">
              <img
                style={{
                  position: "absolute",
                  height: "74px",
                  top: "1px",
                }}
                id="t4"
                class="rounded-t-lg"
                src="https://i.postimg.cc/zGNJ09WT/chef-removebg-preview.png"
                alt=""
              />
            </a>
            <div className="choose__sub__content">
              <a href="#" class="text-decoration-none">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Skilled Chefs
                </h5>
              </a>
              <p
                style={{ textAlign: "center", fontSize: "15px" }}
                class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem Ipsum is simply dummy text of the printingand dummy text
                of the printingand
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

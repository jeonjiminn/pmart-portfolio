/* eslint-disable */

import "../App.css";

import { Footer, Brandlogo } from "../Footer";
import SubHeader from "./SubHeader.js";
import data from "../data.js";
import { useState } from "react";
import { Button, Navbar, Container, Nav, NavDropdown, Row, Col, Collapse } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Shop() {
  let [product] = useState(data);
  let { id } = useParams();
  return (
    <>
      <SubHeader />
      <div className="Sub-product-area">
        <Container>
          <Row>
            <Col>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>{product[id].title}</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <SubProductSection product={product} />
      <SubProductTap />
      <Footer />
    </>
  );
}

export default Shop;

function SubProductSection(props) {
  let starNum = ["1", "2", "3", "4", "5"];

  let { id } = useParams();

  let [salePer, setSalePer] = useState(props.product[id].salePer);

  let [img, setImg] = useState(process.env.PUBLIC_URL + "/img/product" + props.product[id].mainImg + ".webp");

  function changeImg(event) {
    let newImg = [...img];
    newImg = event.target.src;
    setImg(newImg);
  }

  let randomResult = Math.floor(Math.random() * 15);

  return (
    <section className="sub-main-content">
      <Container>
        <Row xs={1} md={2}>
          <Col>
            <div className="sub-product-detail-img">
              <div className="sub-img-top">
                <img src={img} id="big" />
              </div>
              <ul className="sub-img-bottom">
                <li>
                  <input type="radio" name="subimg" id="detail_1" />
                  <label htmlFor="detail_1">
                    <img src={process.env.PUBLIC_URL + "/img/product" + props.product[id].mainImg + ".webp"} className="small" onClick={changeImg} />
                  </label>
                </li>
                <li>
                  <input type="radio" name="subimg" id="detail_2" />
                  <label htmlFor="detail_2">
                    <img src={process.env.PUBLIC_URL + "/img/subproduct" + props.product[id].mainImg + "-2.webp"} className="small" onClick={changeImg} />
                  </label>
                </li>
                <li>
                  <input type="radio" name="subimg" id="detail_3" />
                  <label htmlFor="detail_3">
                    <img src={process.env.PUBLIC_URL + "/img/subproduct" + props.product[id].mainImg + "-3.webp"} className="small" onClick={changeImg} />
                  </label>
                </li>
                <li>
                  <input type="radio" name="subimg" id="detail_4" />
                  <label htmlFor="detail_4">
                    <img src={process.env.PUBLIC_URL + "/img/subproduct" + props.product[id].mainImg + "-4.webp"} className="small" onClick={changeImg} />
                  </label>
                </li>
              </ul>
            </div>
          </Col>
          <Col className="sub-main-content-left">
            <div className="subProduct-title">
              <h2>{props.product[id].title}</h2>
            </div>

            <div className="subProduct-ratting">
              <span>
                {starNum.map((number, index) => (
                  <img src={process.env.PUBLIC_URL + "/img/star-line.svg"} />
                ))}
              </span>
            </div>

            <div className="subProduct-inventory">
              <h6>Availability:</h6>

              {randomResult === 0 ? (
                <span className="outStock">
                  Out Of Stock
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="rgba(220,53,69,1)" />
                  </svg>
                </span>
              ) : (
                <span className="inStock">
                  In Stock
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="rgba(25,135,84,1)" />
                  </svg>
                </span>
              )}
            </div>

            <div className="subProduct-price-wrap">
              <div className="subProduct-price">
                <span>{props.product[id].price}</span>
                <span>{props.product[id].salePrice}</span>
              </div>
              <div className="subProduct-saletag">{salePer === "" ? null : <span>{salePer}</span>}</div>
            </div>

            <div className="subProduct-stock">
              {randomResult === 0 ? (
                <span>Sorry we will be back in stock soon</span>
              ) : (
                <span>
                  Hurry up! only <span className="stockNum">{randomResult}</span> products left in stock!
                </span>
              )}
            </div>

            <div className="subProduct-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus, leo et ornare blandit, mi risus mollis diam,lectus sed tortor.</div>

            <div className="subProduct-color">
              <h6>Color:</h6>
              <div className="color-box">
                <input type="radio" name="colorbox" id="box1" />
                <label htmlFor="box1" className="box1"></label>
                <input type="radio" name="colorbox" id="box2" />
                <label htmlFor="box2" className="box2"></label>
                <input type="radio" name="colorbox" id="box3" />
                <label htmlFor="box3" className="box3"></label>
              </div>
            </div>

            <div className="subProduct-size">
              <h6>Size:</h6>
              <div className="size-box">
                <input type="radio" name="sizebox" id="box4" />
                <label htmlFor="box4" className="box4">
                  250GM
                </label>
                <input type="radio" name="sizebox" id="box5" />
                <label htmlFor="box5" className="box5">
                  500GM
                </label>
              </div>
            </div>

            <div className="subProduct-quantity">
              <h6>Quantity:</h6>
              <div className="quantity-box">
                <div
                  className="minus"
                  onClick={() => {
                    let minus = document.getElementById("value").value;
                    minus--;

                    if (minus < 1) {
                      minus = 1;
                      alert("1개 이상 주문하세요.");
                    }
                    document.getElementById("value").value = minus;
                  }}
                >
                  -
                </div>
                <input value="1" type="text" name="quantity" min="1" pattern="[0-9]*" id="value" />
                <div
                  className="plus"
                  onClick={() => {
                    let plus = document.getElementById("value").value;
                    plus++;

                    if (plus > 10) {
                      plus = 10;
                      alert("1인당 10개 이상 구입 불가능합니다.");
                    }
                    document.getElementById("value").value = plus;
                  }}
                >
                  +
                </div>
              </div>
            </div>

            <div className="subProduct-button">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                  <path fill="none" d="M0 0H24V24H0z" />
                  <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z" fill="rgba(255,255,255,1)" />
                </svg>
              </a>
              <button>
                {randomResult === 0 ? (
                  <span className="sold-out">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="rgba(255,255,255,1)" />
                    </svg>
                    &nbsp;Sold out
                  </span>
                ) : (
                  <span className="add-cart">Add to cart</span>
                )}
              </button>
              <a className="buy-button">Buy now</a>
            </div>

            <div className="subProduct-sku">
              <h6>SKU:</h6>
              <span>7856-2-6-13</span>
            </div>

            <div className="subProduct-share">
              <h6>Share:</h6>
              <ul>
                <li>
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" fill="rgba(59,89,153,1)" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
                        fill="rgba(85,172,238,1)"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M13.37 2.094A10.003 10.003 0 0 0 8.002 21.17a7.757 7.757 0 0 1 .163-2.293c.185-.839 1.296-5.463 1.296-5.463a3.739 3.739 0 0 1-.324-1.577c0-1.485.857-2.593 1.923-2.593a1.334 1.334 0 0 1 1.342 1.508c0 .9-.578 2.262-.88 3.54a1.544 1.544 0 0 0 1.575 1.923c1.898 0 3.17-2.431 3.17-5.301 0-2.2-1.457-3.848-4.143-3.848a4.746 4.746 0 0 0-4.93 4.794 2.96 2.96 0 0 0 .648 1.97.48.48 0 0 1 .162.554c-.046.184-.162.623-.208.784a.354.354 0 0 1-.51.254c-1.384-.554-2.036-2.077-2.036-3.816 0-2.847 2.384-6.255 7.154-6.255 3.796 0 6.32 2.777 6.32 5.747 0 3.909-2.177 6.848-5.394 6.848a2.861 2.861 0 0 1-2.454-1.246s-.578 2.316-.692 2.754a8.026 8.026 0 0 1-1.019 2.131c.923.28 1.882.42 2.846.416a9.988 9.988 0 0 0 9.996-10.003 10.002 10.002 0 0 0-8.635-9.903z"
                        fill="rgba(189,8,28,1)"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="subProduct-cardlogo">
              <div className="pay">
                <a href="#">
                  <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-visa">
                    <title id="pi-visa">Visa</title>
                    <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
                    <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
                    <path
                      d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z"
                      fill="#142688"
                    ></path>
                  </svg>
                  <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-paypal">
                    <title id="pi-paypal">PayPal</title>
                    <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
                    <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
                    <path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"></path>
                    <path fill="#3086C8" d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"></path>
                    <path fill="#012169" d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"></path>
                  </svg>
                  <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-master">
                    <title id="pi-master">Mastercard</title>
                    <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
                    <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
                    <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
                    <circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
                    <path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24" aria-labelledby="pi-american_express">
                    <title id="pi-american_express">American Express</title>
                    <g fill="none">
                      <path fill="#000" d="M35,0 L3,0 C1.3,0 0,1.3 0,3 L0,21 C0,22.7 1.4,24 3,24 L35,24 C36.7,24 38,22.7 38,21 L38,3 C38,1.3 36.6,0 35,0 Z" opacity=".07"></path>
                      <path fill="#006FCF" d="M35,1 C36.1,1 37,1.9 37,3 L37,21 C37,22.1 36.1,23 35,23 L3,23 C1.9,23 1,22.1 1,21 L1,3 C1,1.9 1.9,1 3,1 L35,1"></path>
                      <path
                        fill="#FFF"
                        d="M8.971,10.268 L9.745,12.144 L8.203,12.144 L8.971,10.268 Z M25.046,10.346 L22.069,10.346 L22.069,11.173 L24.998,11.173 L24.998,12.412 L22.075,12.412 L22.075,13.334 L25.052,13.334 L25.052,14.073 L27.129,11.828 L25.052,9.488 L25.046,10.346 L25.046,10.346 Z M10.983,8.006 L14.978,8.006 L15.865,9.941 L16.687,8 L27.057,8 L28.135,9.19 L29.25,8 L34.013,8 L30.494,11.852 L33.977,15.68 L29.143,15.68 L28.065,14.49 L26.94,15.68 L10.03,15.68 L9.536,14.49 L8.406,14.49 L7.911,15.68 L4,15.68 L7.286,8 L10.716,8 L10.983,8.006 Z M19.646,9.084 L17.407,9.084 L15.907,12.62 L14.282,9.084 L12.06,9.084 L12.06,13.894 L10,9.084 L8.007,9.084 L5.625,14.596 L7.18,14.596 L7.674,13.406 L10.27,13.406 L10.764,14.596 L13.484,14.596 L13.484,10.661 L15.235,14.602 L16.425,14.602 L18.165,10.673 L18.165,14.603 L19.623,14.603 L19.647,9.083 L19.646,9.084 Z M28.986,11.852 L31.517,9.084 L29.695,9.084 L28.094,10.81 L26.546,9.084 L20.652,9.084 L20.652,14.602 L26.462,14.602 L28.076,12.864 L29.624,14.602 L31.499,14.602 L28.987,11.852 L28.986,11.852 Z"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function SubProductTap() {
  let [tap, setTap] = useState(0);

  return (
    <section className="sub-product-tap">
      <Container>
        <Row>
          <Col>
            <div className="Tab">
              <ul>
                <li>
                  <a
                    onClick={() => {
                      setTap(0);
                    }}
                  >
                    Description
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      setTap(1);
                    }}
                  >
                    Additional Information
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      setTap(2);
                    }}
                  >
                    Review
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      setTap(3);
                    }}
                  >
                    Comment
                  </a>
                </li>
              </ul>
            </div>
            <TabContents tap={tap} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function TabContents(props) {
  let { id } = useParams();
  let [product] = useState(data);

  let [customerList, setCustomerList] = useState([
    { name: "전지민", message: "첨가물이 유기농이라, 안심하고 먹일 수 있어 좋았습니다." },
    { name: "심다혜", message: "기호성이 좋은 간식." },
  ]);

  let [customer, setCustomer] = useState({
    name: "",
    message: "",
  });

  let handleName = (e) => {
    setCustomer((prevState) => {
      return { ...prevState, name: e.target.value };
    });
  };

  let handlemessage = (e) => {
    setCustomer((prevState) => {
      return { ...prevState, message: e.target.value };
    });
  };

  let handleCommit = (e) => {
    console.log(customer.name);
    console.log(customer.message);

    setCustomerList((prevState) => {
      return [customer, ...prevState];
    });

    setCustomer(() => {
      return { name: "", message: "" };
    });
  };

  if (props.tap === 0) {
    return (
      <div className="Tab-contents">
        <div className="contents1">
          <h2>More Detail</h2>
          <ul className="contents1-ul">
            <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</li>
            <li>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</li>
            <li>The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</li>
            <li>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</li>
            <li>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</li>
            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
          </ul>
        </div>
        <div className="contents1">
          <h2>Key Specification</h2>
          <ul className="contents1-ul">
            <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</li>
            <li>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
              adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </li>
            <li>
              But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the
              master-builder of human happiness.
            </li>
            <li>
              To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying
              consequences, or one who avoids a pain that produces no resultant pleasure?
            </li>
            <li>
              These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain
              avoided.
            </li>
            <li>But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.</li>
            <li>The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</li>
          </ul>
        </div>
      </div>
    );
  } else if (props.tap === 1) {
    return (
      <div className="Tab-contents">
        <table className="contents2">
          <tbody>
            <tr>
              <th>Vendor:&nbsp;</th>
              <td>
                <a>Pmart</a>
              </td>
            </tr>
            <tr>
              <th>Type:&nbsp;</th>
              <td>
                <a>{product[id].type}</a>
              </td>
            </tr>
            <tr>
              <th>Color:&nbsp;</th>
              <td>
                <a>{product[id].color}</a>
              </td>
            </tr>

            {product[id].size === 0 ? (
              <tr>
                <th></th>
                <td>
                  <a></a>
                </td>
              </tr>
            ) : (
              <tr>
                <th>Size:&nbsp;</th>
                <td>
                  <a>{product[id].size}</a>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  } else if (props.tap === 2) {
    return (
      <div className="Tab-contents">
        <div className="contents3">
          <h2>Customer Reviews</h2>
          {customerList.map((element, idx) => {
            return (
              <div key={idx}>
                <div>
                  <span style={{fontWeight: 'bold', marginRight: '10px'}}>{element.name}</span>
                  <span>{element.message}</span>
                  <button onClick={()=>{
                    let copy = [...customerList];
                    copy.splice(idx, 1);
                    setCustomerList(copy);
                  }}>delete</button>
                </div>
              </div>
            );
          })}
          <h2 className="review">Write a review</h2>
          <div>
            <p>
              <p>name</p>
              <input type="text" onChange={handleName} value={customer.name} style={{width: '30%'}}></input>
            </p>

            <p>
              <p>message</p>
              <input type="text" name="message" onChange={handlemessage} value={customer.message} style={{width: '65%', height: '100px'}}></input>
            </p>

            <button onClick={handleCommit}>Submit</button>
          </div>
        </div>
      </div>
    );
  } else if (props.tap === 3) {
    return <div className="Tab-contents">내용4</div>;
  }
}

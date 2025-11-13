/* eslint-disable */

import data from "../data.js";
import plusdata1 from "../plusdata1.js";

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { NavLink } from "react-bootstrap";
import { useParams } from "react-router-dom";

import axios from "axios";

function Mainproduct() {
  let [product, setProduct] = useState(data);
  let [plusdata, setplusdata] = useState(plusdata1);

  return (
    <>
      <section className="product-area">
        <Container>
          <Row>
            <Col>
              <div className="product-area-text">
                <div className="product-area-title">
                  <h2>Our Product</h2>
                </div>
                <ul className="product-area-button">
                  <li className="product-area-button-box">
                    <a
                      className="btn-name"
                      onClick={() => {
                        let copy1 = [...product].sort((a, b) => (a.title > b.title ? 1 : -1));
                        setProduct(copy1);
                        product = copy1;
                      }}
                    >
                      popularity
                    </a>
                  </li>
                  <li className="product-area-button-box">
                    <a
                      className="btn-name"
                      onClick={() => {
                        let copy2 = [...product].sort((a, b) => (a.price > b.price ? 1 : -1));
                        setProduct(copy2);
                        product = copy2;
                      }}
                    >
                      low price
                    </a>
                  </li>
                  <li className="product-area-button-box">
                    <a
                      className="btn-name"
                      onClick={() => {
                        let copy3 = [...product].sort((a, b) => (b.price > a.price ? 1 : -1));
                        setProduct(copy3);
                        product = copy3;
                      }}
                    >
                      high price
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row xs={2} md={3} lg={4}>
            {product.map((number, index) => {
              return <Product product={product[index]} />;
            })}
          </Row>
        </Container>
      </section>
    </>
  );
}

function Mainproduct2() {
  let [product, setProduct] = useState(data);
  let [plusdata, setPlusdata] = useState(plusdata1);
  let [count, setCount] = useState(1);

  return (
    <>
      <section className="product-area">
        <Container>
          <Row>
            <Col>
              <div className="product-area-text">
                <div className="product-area-title">
                  <h2>Feature product</h2>
                </div>
                <ul className="product-area-button">
                  <li className="product-area-button-box">
                    <a
                      className="btn-name"
                      count={count}
                      onClick={() => {
                        if (count == 1) {
                          axios.get("https://jeonjiminn.github.io/pmart_plusdata/plusdata2.json").then((result) => {
                            console.log('result.data : ', result.data)
                            let copy4 = [...plusdata];
                            for(const i of result.data) {
                              console.log('i : ', i)
                              copy4.push(i)
                            }
                            console.log('copy4 : ', copy4)
                            setPlusdata(copy4);
                            setCount(2);
                            console.log('plusdata : ', plusdata)
                          });
                        }

                        if (count === 2) {
                          alert("더이상 상품이 없습니다.");
                        }
                      }}
                    >
                      view more..
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row xs={2} md={3} lg={4}>
            {plusdata.map((number, index) => {
              return <Plusdata plusdata={plusdata[index]} />;
            })}
          </Row>
        </Container>
      </section>
    </>
  );
}

function Product(props) {
  let starNum = ["1", "2", "3", "4", "5"];
  let navigate = useNavigate();

  return (
    <Col>
      <div className="product-box-wrap">
        <div className="product-imgbox">
          <a
            onClick={() => {
              navigate("/shop/" + props.product.page);
            }}
          >
            <div className="product-img">
              <img src={process.env.PUBLIC_URL + "/img/product" + props.product.mainImg + ".webp"} />
              <img src={process.env.PUBLIC_URL + "/img/product" + props.product.subImg + ".webp"} />
            </div>
            <div className="sale-label">{props.product.salePer == "" ? null : <span>{props.product.salePer}</span>}</div>
            <Hoveraction />
          </a>
        </div>
        <div className="product-name">
          <h3>
            <a
              onClick={() => {
                navigate("/shop/" + props.product.page);
              }}
            >
              {props.product.title}
            </a>
          </h3>
          <div className="product-ratting">
            <span>
              {starNum.map((number, index) => (
                <img src={process.env.PUBLIC_URL + "/img/star-line.svg"} />
              ))}
            </span>
          </div>

          {props.product.salePer == "" ? (
            <div className="product-price">
              <span>{props.product.price}</span>
              <span>{props.product.salePrice}</span>
            </div>
          ) : (
            <div className="product-price">
              <span>{props.product.salePrice}</span>
              <span>{props.product.price}</span>
            </div>
          )}
        </div>
      </div>
    </Col>
  );
}

function Plusdata(props) {
  let starNum = ["1", "2", "3", "4", "5"];
  let navigate = useNavigate();

  return (
    <Col>
      <div className="product-box-wrap">
        <div className="product-imgbox">
          <a
            onClick={() => {
              navigate("/shop/" + props.plusdata.page);
            }}
          >
            <div className="product-img">
              <img src={process.env.PUBLIC_URL + "/img/product" + props.plusdata.mainImg + ".webp"} />
              <img src={process.env.PUBLIC_URL + "/img/product" + props.plusdata.subImg + ".webp"} />
            </div>
            <div className="sale-label">{props.plusdata.salePer == "" ? null : <span>{props.plusdata.salePer}</span>}</div>
            <Hoveraction />
          </a>
        </div>
        <div className="product-name">
          <h3>
            <a
              onClick={() => {
                navigate("/shop/" + props.plusdata.page);
              }}
            >
              {props.plusdata.title}
            </a>
          </h3>
          <div className="product-ratting">
            <span>
              {starNum.map((number, index) => (
                <img src={process.env.PUBLIC_URL + "/img/star-line.svg"} />
              ))}
            </span>
          </div>

          {props.plusdata.salePer == "" ? (
            <div className="product-price">
              <span>{props.plusdata.price}</span>
              <span>{props.plusdata.salePrice}</span>
            </div>
          ) : (
            <div className="product-price">
              <span>{props.plusdata.salePrice}</span>
              <span>{props.plusdata.price}</span>
            </div>
          )}
        </div>
      </div>
    </Col>
  );
}

function Hoveraction() {
  return (
    <div className="hover-action">
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
          <path fill="none" d="M0 0H24V24H0z" />
          <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z" fill="rgba(255,255,255,1)" />
        </svg>
      </a>
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M12 1a5 5 0 0 1 5 5v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3V6a5 5 0 0 1 5-5zm5 10h-2v1a1 1 0 0 0 1.993.117L17 12v-1zm-8 0H7v1a1 1 0 0 0 1.993.117L9 12v-1zm3-8a3 3 0 0 0-2.995 2.824L9 6v2h6V6a3 3 0 0 0-2.824-2.995L12 3z"
            fill="rgba(255,255,255,1)"
          />
        </svg>
      </a>
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M1.181 12C2.121 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill="rgba(255,255,255,1)" />
        </svg>
      </a>
    </div>
  );
}

export { Mainproduct, Mainproduct2, Product, Hoveraction };

/* eslint-disable */

import data2 from "../data2.js";

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";

function Category() {
  let [category] = useState(data2);

  return (
    <section className="category">
      <Container>
        <Row>
          <Col>
            <div className="product-area-text">
              <div className="product-area-title">
                <h2>Shop By Category</h2>
              </div>
            </div>
          </Col>
        </Row>
        <Row xs={2} md={4}>
          {category.map((number, index) => (
            <Categoryitem category={category[index]} />
          ))}
        </Row>
      </Container>
    </section>
  );
}

function Categoryitem(props) {
  return (
    <Col>
      <div className="category-contents">
        <div className="category-item">
          <a href="#" className="category-img">
            <img src={process.env.PUBLIC_URL + "/img/" + props.category.img + ".webp"} />
          </a>
          <div className="category-count">
            <span>{props.category.num}</span>
            <span>Product</span>
          </div>
          <div className="category-title">
            <a href="#">
              <span>{props.category.title}</span>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default Category;

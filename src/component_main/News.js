/* eslint-disable */

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";

function News() {
  let title = ["Why do we use it?", "What is lorem ipsum?", "Where does it come from?"];

  return (
    <section className="blog-wrap">
      <Container>
        <Row>
          <Col>
            <div className="product-area-text">
              <div className="product-area-title">
                <h2>Recent News</h2>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          {title.map((name, index) => (
            <Col xs={12} md={4}>
              <div className="blog-post">
                <a href="#">
                  <img src={process.env.PUBLIC_URL + "/img/blog_img" + [index + 1] + ".webp"} />
                </a>
                <div className="blog-post-contents">
                  <p className="blog-date-comment">
                    <span>May 17, 2022</span>
                    <a href="#">0 Comment</a>
                  </p>
                  <h2 className="blog-title">
                    <a href="#">{name}</a>
                  </h2>
                  <p className="blog-desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. ...</p>
                  <div className="blog-btn">
                    <a href="#">
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default News;

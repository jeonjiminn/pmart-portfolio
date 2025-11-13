/* eslint-disable */

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";


function Banner(){
    return(
      <section className="Banner-wrap">
        <Container>
          <Row>
            <Col>
              <div className="Banner-area">
                <div className="Banner-img-area">
                  <span>
                    <img src={process.env.PUBLIC_URL + "/img/banner-3.webp"}/>
                  </span>
                </div>
                <div className="Banner-txt-area">
                  <div className="Banner-txt-title">
                    <span className="sub-title">Best ingredients</span>
                    <h1>
                      <span className="main-title">Wholesome</span>
                      <span className="main-title">food for pets</span>ß
                    </h1>
                  </div>
                  <div className="Banner-txt-content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
                    </p>
                  </div>
                  <div className="Banner-txt-btn">
                    <a href="#">read more</a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }

  export default Banner;
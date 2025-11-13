/* eslint-disable */

import { useState } from "react";
import { Button, Navbar, Container, Nav, NavDropdown, Row, Col, Collapse } from "react-bootstrap";

function Slider() {
  return (
    <section className="sliderWrap">
      <div>
        <div className="wrapper">
          <div className="slider1">
            <Container>
              <Row>
                <Col>
                  <div className="slider_text">
                    <span>Fresh & Healthy</span>
                    <h2>
                      <span>Food for</span>
                      <span>your dog</span>
                    </h2>
                    <a href="#">Shop now</a>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="slider2">
            <Container>
              <Row>
                <Col>
                  <div className="slider_text">
                    <span>Fresh & Healthy</span>
                    <h2>
                      <span>Food for</span>
                      <span>your dog</span>
                    </h2>
                    <a href="#">Shop now</a>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="slider3">
            <Container>
              <Row>
                <Col>
                  <div className="slider_text">
                    <span>Fresh & Healthy</span>
                    <h2>
                      <span>Food for</span>
                      <span>your dog</span>
                    </h2>
                    <a href="#">Shop now</a>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="sliderButton">
          <button className="prev">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z" fill="rgba(255,255,255,1)" />
            </svg>
          </button>
          <button className="next">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z" fill="rgba(255,255,255,1)" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Slider;

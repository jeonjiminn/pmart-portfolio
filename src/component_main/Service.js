/* eslint-disable */

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";

function Service() {
  return (
    <div className="service-area">
      <Container>
        <Row>
          <Col>
            <ul className="service-wrap">
              <li className="service-contents">
                <div className="service-block">
                  <div className="service-icon">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M8.965 18a3.5 3.5 0 0 1-6.93 0H1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2h3l3 4.056V18h-2.035a3.5 3.5 0 0 1-6.93 0h-5.07zM15 7H3v8.05a3.5 3.5 0 0 1 5.663.95h5.674c.168-.353.393-.674.663-.95V7zm2 6h4v-.285L18.992 10H17v3zm.5 6a1.5 1.5 0 1 0 0-3.001 1.5 1.5 0 0 0 0 3.001zM7 17.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                      </svg>
                    </a>
                  </div>
                  <div className="service-txt">
                    <h4>Free Delivary</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor</p>
                  </div>
                </div>
              </li>
              <li className="service-contents">
                <div className="service-block">
                  <div className="service-icon">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.5-6H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z" />
                      </svg>
                    </a>
                  </div>
                  <div className="service-txt">
                    <h4>Return & refund</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor</p>
                  </div>
                </div>
              </li>
              <li className="service-contents">
                <div className="service-block">
                  <div className="service-icon">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M22 17.002a6.002 6.002 0 0 1-4.713 5.86l-.638-1.914A4.003 4.003 0 0 0 19.465 19H17a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.938a8.001 8.001 0 0 0-15.876 0H7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5C2 6.477 6.477 2 12 2s10 4.477 10 10V17.002zM20 17v-4h-3v4h3zM4 13v4h3v-4H4z" />
                      </svg>
                    </a>
                  </div>
                  <div className="service-txt">
                    <h4>Quality Support</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor</p>
                  </div>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Service;

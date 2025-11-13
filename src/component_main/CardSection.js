/* eslint-disable */

import { Container, Row, Col } from "react-bootstrap";

function CardSection() {
    return (
      <section className="cardWrap">
        <Container>
          <Row>
            <Col>
              <div className="cardWrap-area">
                <div className="cardWrap-area-box">
                  <a href="#">
                    <img src={process.env.PUBLIC_URL + "/img/banner-1.webp"} />
                  </a>
                  <div className="box-text">
                    <p>Fresh Food</p>
                    <h3>
                      Special
                      <br />
                      pets food
                    </h3>
                    <a href="#">shop now</a>
                  </div>
                </div>
                <div className="cardWrap-area-box">
                  <a href="#">
                    <img src={process.env.PUBLIC_URL + "/img/banner-2.webp"} />
                  </a>
                  <div className="box-text">
                    <p>Up to 35% off</p>
                    <h3>
                      Best offer
                      <br />
                      dog food
                    </h3>
                    <a href="#">shop now</a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  export default CardSection;
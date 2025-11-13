/* eslint-disable */

import "./App.css";

import axios from "axios";

import Header from "./Header.js";
import { Footer, Brandlogo } from "./Footer";


// 메인 화면 컴포넌트
import Slider from "./component_main/Slider.js";
import CardSection from "./component_main/CardSection.js";
import Banner from "./component_main/Banner.js";
import Category from "./component_main/Category.js";
import Service from "./component_main/Service.js";
import News from "./component_main/News.js";
import { Mainproduct, Mainproduct2, Product, SaleProduct, Hoveraction } from "./component_main/Mainproduct.js";


// 서브 화면 컴포넌트
import Shop from "./component_sub/Shop.js";



import data from "./data.js";
import data2 from "./data2.js";

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet, useParams } from "react-router-dom";

function App() {
  let [product] = useState(data);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Slider />
              <CardSection />
              <Mainproduct />
              <Banner />
              <Mainproduct2 />
              <Category />
              <Service />
              <News />
              <Brandlogo />
              <Footer />
            </>
          }
        />
        <Route path="/shop/:id" element={<Shop/>}/>
        <Route path="/about" element={<div>회사소개</div>} />
        <Route path="/login" element={<div>로그인페이지</div>} />
        <Route path="/cart" element={<div>장바구니</div>} />
      </Routes>
    </div>
  );
}

export default App;






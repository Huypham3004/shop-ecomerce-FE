/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from 'react-router-dom';
// nodejs library that concatenates classes
import classnames from "classnames";
import axios from 'axios';

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import Lightbox from 'react-image-lightbox';
import mockAllProducts from "../../data/mockAllProducts.json";
import { DataContext } from "../../index"

// index page sections
import Download from "../IndexSections/Download.js";
const images = [
  "https://giayxshop.vn/wp-content/uploads/2022/07/z3657932021630_50a8632c81be92e2861408d560765cae.jpg",
  "https://giayxshop.vn/wp-content/uploads/2022/07/z3657932085521_77caa9ac7a21d8a617596b66034716d1.jpg",
  "https://giayxshop.vn/wp-content/uploads/2022/07/z3657932051478_b6563a93b7f50c597f77b81a7e8a408e.jpg",
  "https://giayxshop.vn/wp-content/uploads/2022/07/z3657932032657_8d9cf937dee67b4cb4c79ecf2f61a82b.jpg",
  "https://giayxshop.vn/wp-content/uploads/2022/07/z3657932029111_414990a61d2c8c1d3fb1e0e7e2446d1a.jpg"
]

const Cart = () => {
  const { product_id, product_size } = useParams()
  const { allProductsData, setId, setSize, id, size, shippingPrice, totalValue, setTotalValue, quantity, setQuantity } = useContext(DataContext) 
  const findProduct = allProductsData[product_id];
  setSize(product_size)


  const [token, setToken] = useState(null);
  const [products, setProducts] = useState([]);
  const [plainTabs, setPlainTabs] = useState(1);
  const [currentImage, setCurrentImage] = useState("https://giayxshop.vn/wp-content/uploads/2022/07/z3657932021630_50a8632c81be92e2861408d560765cae.jpg")
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const [sale, setSale] = useState(0);

  const checkToken = async () => {
    const token = await localStorage.getItem("token");
    if (token) {
      setToken(token);
      return true;
    }
    return false;
  };

  const getProducts = async () => {
    const data = await axios.get("https://dummyjson.com/products");
    const products = data.data.products;
    setProducts(products);
    console.log(products);
  };

  const handleClickPreviewImg = () => {
    let index = images.findIndex(item => item == currentImage);
    setPhotoIndex(index);
    setIsOpen(true);
  }

  const increaseQuantity = () => {
    let newQuantity = quantity + 1;
    setQuantity(newQuantity);

  }

  let decreaseQuantity = () => {
    let newQuantity = quantity - 1;
    if (newQuantity < 1) {
      return;
    }
    setQuantity(newQuantity);

  }

  setTotalValue(findProduct.price * quantity - findProduct.price * quantity * sale);
  
  const inputSale = (e) => {
    let value = e.target.value;
    if (value === "CD15") {
      setSale(0.15)
    } else {
      setSale(0)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      await checkToken();
      await getProducts();
    };
    fetchData();
  }, []);

  return (
    <>
      <DemoNavbar />
      <main>
        <div className="position-relative">
          {/* shape Hero */}
          <section className="section section-lg section-shaped pb-250">
            <div className="shape shape-style-1 shape-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          {/* 1st Hero Variation */}
        </div>


        <Container className="container-lg mt--300">
          <Row className="justify-content-center">
            <h2 className="font-weight-bold mt-lg mb-5 text-white">
              <span>Giỏ hàng</span>
            </h2>
          </Row>
          <Row>
            <Col className="mb-5 mb-md-0" md="6">
              <h5 className="mt-lg text-black">
                <span>Sản phẩm</span>
              </h5>
            </Col>
            <Col className="mb-5 mb-lg-0" md="2">
              <h5 className="mt-lg text-black">
                <span>Giá</span>
              </h5>
            </Col>
            <Col className="mb-5 mb-lg-0" md="2">
              <h5 className="mt-lg text-black">
                <span>Số lượng</span>
              </h5>
            </Col>
            <Col className="mb-5 mb-lg-0" md="2">
              <h5 className="mt-lg text-black">
                <span>Tổng</span>
              </h5>
            </Col>
          </Row>
          <hr />
          <Row style={{ display: 'flex', alignItems: 'center' }}>
            <Col className="mb-2 mb-md-0" md="6">
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <img width={100} height={100} src={findProduct.thumbnail} />
                <h5>{findProduct.title}, size: {product_size}</h5>
              </div>
            </Col>
            <Col className="mb-2 mb-lg-0" md="2">
              <h5>{findProduct.price}₫</h5>
            </Col>
            <Col className="mb-2 mb-lg-0" md="2">
              <div style={{ display: 'flex', gap: '3px' }}>
                <button onClick={() => decreaseQuantity()} style={{ width: '30px', border: '0.5px solid black', borderRadius: '3px', outline: 'none' }}>-</button>
                <input value={quantity} style={{ width: '30px', border: 'none' }} />
                <button onClick={() => increaseQuantity()} style={{ width: '30px', border: '0.5px solid black', borderRadius: '3px', outline: 'none' }}>+</button>
              </div>
            </Col>
            <Col className="mb-2 mb-lg-0" md="2">
              <h5>{findProduct.price}</h5>
            </Col>
          </Row>
          <Row className="ml-5" >
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              <h5 className="mt-md text-black">
                Mã giảm giá
              </h5>
              <input className="mt-md" style={{ width: '500px', height: '30px', border: 'none', borderBottom: '1px solid black' }} onChange={(e) => { inputSale(e) }} />
            </div>

          </Row>
          <Row>
            <Col className="mb-2 mb-md-0" md="3">
              <h5 className="mt-lg text-black">
                <span>Cộng giỏ hàng</span>
              </h5>
            </Col>
            <Col className="mb-2 mb-md-0" md="3">
              <h5 className="mt-lg text-black">
                <span>Tạm tính</span>
              </h5>
            </Col>
            <Col className="mb-2 mb-md-0" md="3">
              <h5 className="mt-lg text-black">
                <span>{totalValue}₫</span>
              </h5>
            </Col>
          </Row>
          <Row>
            <Col className="mb-5 mb-md-0" md="3">
              <h5 className="mt-4 text-black">
                <span></span>
              </h5>
            </Col>
            <Col className="mb-5 mb-md-0" md="3">
              <h5 className="mt-4 text-black">
                <span>Phí ship</span>
              </h5>
            </Col>
            <Col className="mb-5 mb-md-0" md="3">
              <h5 className="mt-4 text-black">
                <span>{shippingPrice}₫</span>
              </h5>
            </Col>
          </Row>
          <Row>
            <Col className="mb-5 mb-md-0" md="3">
              <h5 className="mt-4 text-black">
                <span></span>
              </h5>
            </Col>
            <Col className="mb-5 mb-md-0" md="3">
              <h5 className="mt-4 text-black">
                <span>Tổng cộng</span>
              </h5>
            </Col>
            <Col className="mb-5 mb-md-0" md="3">
              <h5 className="mt-4 text-black">
                <span>{totalValue + shippingPrice}₫</span>
              </h5>
            </Col>
          </Row>
          <Link to={`/order-page/${product_id}&&${product_size}`}>
            <Button block color="warning" size="lg" type="button" className="mt-5 mb-3" >
              Tiến hành thanh toán
            </Button>
          </Link>
        </Container>
      </main>
      <CardsFooter />
    </>
  );
}

export default Cart;

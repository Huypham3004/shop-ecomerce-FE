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
// const images = [
//   "https://giayxshop.vn/wp-content/uploads/2022/07/z3657932021630_50a8632c81be92e2861408d560765cae.jpg",
//   "https://giayxshop.vn/wp-content/uploads/2022/07/z3657932085521_77caa9ac7a21d8a617596b66034716d1.jpg",
//   "https://giayxshop.vn/wp-content/uploads/2022/07/z3657932051478_b6563a93b7f50c597f77b81a7e8a408e.jpg",
//   "https://giayxshop.vn/wp-content/uploads/2022/07/z3657932032657_8d9cf937dee67b4cb4c79ecf2f61a82b.jpg",
//   "https://giayxshop.vn/wp-content/uploads/2022/07/z3657932029111_414990a61d2c8c1d3fb1e0e7e2446d1a.jpg"
// ]

const Detail = () => {
  const { product_id } = useParams()
  const { allProductsData, setId, setSize, id, size } = useContext(DataContext) 
  setId(product_id);
  const findProduct = allProductsData[product_id];  
  
  const [token, setToken] = useState(null);
  const [products, setProducts] = useState([]);
  const [plainTabs, setPlainTabs] = useState(40);
  const [currentImage, setCurrentImage] = useState(findProduct.thumbnail);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

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
    let index = findProduct.images.findIndex(item => item == currentImage);
    setPhotoIndex(index);
    setIsOpen(true);
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
            {!token && (
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        A beautiful Design System{" "}
                        <span>completed with examples</span>
                      </h1>
                      <p className="lead text-white">
                        The design system comes with four pre-built pages to
                        help you get started faster. You can change the text and
                        images and you're good to go.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">
                            Please sign in to see our product!
                          </span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
            )}
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
        {token && (
          <section className="section section-lg pt-lg-0 mt--300">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <h2 className="h2 text-white font-weight-bold mt-md mb-4">
                    Đặt hàng
                  </h2>
                  <Row className="row-grid">
                    <Col lg="7" >
                      <div className="img-up">
                        <img src={currentImage} style={{ width: "100%" }} onClick={() => handleClickPreviewImg()} />
                      </div>

                      <div className="img-down" style={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "15px",
                      }}>
                        {findProduct.images.map((img) => (
                          <div className="img-small" >
                            <img src={img} style={{ width: "100%" }} onClick={() => setCurrentImage(img)} />
                          </div>
                        ))}
                      </div>

                      {/* <div className="img-down" style={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "15px",
                      }}>
                        <div className="img-small" >
                          <img src="https://giayxshop.vn/wp-content/uploads/2022/07/z3657932021630_50a8632c81be92e2861408d560765cae.jpg" style={{ width: "100px", height: "100px" }} onClick={() => setCurrentImage("https://giayxshop.vn/wp-content/uploads/2022/07/z3657932021630_50a8632c81be92e2861408d560765cae.jpg")} />
                        </div>
                        <div className="img-small" >
                          <img src="https://giayxshop.vn/wp-content/uploads/2022/07/z3657932021630_50a8632c81be92e2861408d560765cae.jpg" style={{ width: "100px", height: "100px" }} onClick={() => setCurrentImage("https://giayxshop.vn/wp-content/uploads/2022/07/z3657932021630_50a8632c81be92e2861408d560765cae.jpg")} />
                        </div>
                        <div className="img-small" >
                          <img src="https://giayxshop.vn/wp-content/uploads/2022/07/z3657932085521_77caa9ac7a21d8a617596b66034716d1.jpg" style={{ width: "100px", height: "100px" }} onClick={() => setCurrentImage("https://giayxshop.vn/wp-content/uploads/2022/07/z3657932085521_77caa9ac7a21d8a617596b66034716d1.jpg")} />
                        </div>
                        <div className="img-small" >
                          <img src="https://giayxshop.vn/wp-content/uploads/2022/07/z3657932051478_b6563a93b7f50c597f77b81a7e8a408e.jpg" style={{ width: "100px", height: "100px" }} onClick={() => setCurrentImage("https://giayxshop.vn/wp-content/uploads/2022/07/z3657932051478_b6563a93b7f50c597f77b81a7e8a408e.jpg")} />
                        </div>
                        <div className="img-small" >
                          <img src="https://giayxshop.vn/wp-content/uploads/2022/07/z3657932032657_8d9cf937dee67b4cb4c79ecf2f61a82b.jpg" style={{ width: "100px", height: "100px" }} onClick={() => setCurrentImage("https://giayxshop.vn/wp-content/uploads/2022/07/z3657932032657_8d9cf937dee67b4cb4c79ecf2f61a82b.jpg")} />
                        </div>
                        <div className="img-small" >
                          <img src="https://giayxshop.vn/wp-content/uploads/2022/07/z3657932029111_414990a61d2c8c1d3fb1e0e7e2446d1a.jpg" style={{ width: "100px", height: "100px" }} onClick={() => setCurrentImage("https://giayxshop.vn/wp-content/uploads/2022/07/z3657932029111_414990a61d2c8c1d3fb1e0e7e2446d1a.jpg")} />
                        </div>
                      </div> */}

                    </Col>
                    <Col lg="5" >
                      <Card className="shadow border-0 ">
                        <CardBody className="py-2">
                          <h2 className="text-default font-weight-bold mb-3">{findProduct.title}</h2>
                          <h3 className="text-default font-weight-bold mb-3">{findProduct.price}₫</h3>
                          <h5 className="text-default font-weight-bold ">
                            Size
                          </h5>
                          <div className="nav-wrapper">
                            <Nav
                              className="nav-fill flex-column flex-md-row"
                              id="tabs-icons-text"
                              pills
                              role="tablist"
                            >
                              <NavItem>
                                <NavLink
                                  aria-selected={plainTabs === 40}
                                  className={classnames("mb-sm-3 mb-md-0", {
                                    active: plainTabs === 40
                                  })}
                                  onClick={() => setPlainTabs(1)}
                                  style={{ cursor: "pointer" }}
                                  role="tab"
                                >
                                  40
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  aria-selected={plainTabs === 41}
                                  className={classnames("mb-sm-3 mb-md-0", {
                                    active: plainTabs === 41
                                  })}
                                  onClick={() => setPlainTabs(41)}
                                  style={{ cursor: "pointer" }}
                                  role="tab"
                                >
                                  41
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  aria-selected={plainTabs === 42}
                                  className={classnames("mb-sm-3 mb-md-0", {
                                    active: plainTabs === 42
                                  })}
                                  onClick={() => setPlainTabs(42)}
                                  style={{ cursor: "pointer" }}
                                  role="tab"
                                >
                                  42
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  aria-selected={plainTabs === 43}
                                  className={classnames("mb-sm-3 mb-md-0", {
                                    active: plainTabs === 43
                                  })}
                                  onClick={() => setPlainTabs(43)}
                                  style={{ cursor: "pointer" }}
                                  role="tab"
                                >
                                  43
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  aria-selected={plainTabs === 44}
                                  className={classnames("mb-sm-3 mb-md-0", {
                                    active: plainTabs === 44
                                  })}
                                  onClick={() => setPlainTabs(44)}
                                  style={{ cursor: "pointer" }}
                                  role="tab"
                                >
                                  44
                                </NavLink>
                              </NavItem>
                            </Nav>
                          </div>
                          <Link to={`/cart-page/${product_id}&&${plainTabs}`}>
                            <Button block color="warning" size="lg" type="button" className="mt-3 mb-3" >
                              Mua ngay
                            </Button>
                          </Link>
                        </CardBody>
                      </Card>

                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>

            {isOpen && (
              <Lightbox
                mainSrc={findProduct.images[photoIndex]}
                nextSrc={findProduct.images[(photoIndex + 1) % findProduct.images.length]}
                prevSrc={findProduct.images[(photoIndex + findProduct.images.length - 1) % findProduct.images.length]}
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() => setPhotoIndex((photoIndex + findProduct.images.length - 1) % findProduct.images.length)}
                onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % findProduct.images.length)}
              />
            )}
          </section>
        )}



      </main>
      <CardsFooter />
    </>
  );
}

export default Detail;

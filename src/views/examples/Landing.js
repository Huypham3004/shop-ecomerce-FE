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
import { Link } from 'react-router-dom';
import { DataContext } from "../../index"
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
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

const Landing = () => {
  const [token, setToken] = useState(null);
  // const [products, setProducts] = useState([]);
  // const allProducts = mockAllProducts.products;
  const { allProductsData, setId, setSize, id, size } = useContext(DataContext) 

  const checkToken = async () => {
    const token = await localStorage.getItem("token");
    if (token) {
      setToken(token);
      return true;
    }
    return false;
  };

  // const getProducts = async () => {
  //   const data = await axios.get("https://dummyjson.com/products");
  //   const products = data.data.products;
  //   setProducts(products);
  //   console.log(products);
  // };

  useEffect(() => {
    const fetchData = async () => {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      await checkToken();
      // await getProducts();
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
                    Danh mục sản phẩm
                  </h2>
                  <Row className="row-grid">
                    {allProductsData && allProductsData.map((item, idx) => (
                      <Col lg="4 mb-5" >
                        <Card className="card-lift--hover shadow border-0 text-center">
                          <CardBody className="py-5">
                            <img width={200} height={150} src={item.thumbnail} />
                            <h6 className="text-warning mt-3" >
                              {item.title}
                            </h6>
                            <h5 className="price mt-3 text-primary">
                              {item.price}₫
                            </h5>
                            <Link to={`/detail-page/${item.id}`} >
                              <Button
                                className="mt-3"
                                color="warning"
                                href="#pablo"
                                onClick
                              >
                                Click to buy
                              </Button>
                            </Link>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        )}

      </main>
      <CardsFooter />
    </>
  );
}


export default Landing;

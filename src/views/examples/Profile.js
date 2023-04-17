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

// reactstrap components
import { Button, Card, Container, Row, Col, Input, Form } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import { DataContext } from "../../index"

const Profile = () => {
  const {
    allProductsData,
    id,
    shippingPrice,
    totalValue,
    quantity,
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    city,
    setCity,
    district,
    setDistrict,
    wards,
    setWards,
    address,
    setAddress,
    info,
    setInfo
  } = useContext(DataContext)
  const [token, setToken] = useState(null);
  const [showChange, setShowChange] = useState(false);
  const [counter, setCounter] = useState(1);
  const findProduct = allProductsData[id];
  let newName = '';
  let newPhone = '';
  let newEmail = '';
  let newCity = '';
  let newDistrict = '';
  let newWards = '';
  let newAddress = '';
  const inputName = (e) => {
    newName = e.target.value;
  }
  const inputPhone = (e) => {
    newPhone = e.target.value;
  }
  const inputEmail = (e) => {
    newEmail = e.target.value;
  }
  const inputCity = (e) => {
    newCity = e.target.value;
  }
  const inputDistrict = (e) => {
    newDistrict = e.target.value;
  }
  const inputWards = (e) => {
    newWards = e.target.value;
  }
  const inputAddress = (e) => {
    newAddress = e.target.value;
  }

  const handleUpdateInfo = () => {
    if (newName !== '') {
      setName(newName);
    } else { setName(name) };
    if (newPhone !== '') {
      setPhone(newPhone);
    } else { setPhone(phone) };
    if (newEmail !== '') {
      setEmail(newEmail);
    } else { setEmail(email) };
    if (newCity !== '') {
      setCity(newCity);
    } else { setCity(city) };
    if (newDistrict !== '') {
      setDistrict(newDistrict);
    } else { setDistrict(district) };
    if (newWards !== '') {
      setWards(newWards);
    } else { setWards(wards) };
    if (newAddress !== '') {
      setAddress(newAddress);
    } else { setAddress(address) };
  }


  const handleChange = () => {
    setCounter(counter + 1)
    if (counter % 2 !== 0) {
      setShowChange(true)
    } else {
      setShowChange(false)
    }
    console.log(counter);
  }

  const checkToken = async () => {
    const token = await localStorage.getItem("token");
    if (token) {
      setToken(token);
      return true;
    }
    return false;
  };

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
      <main className="profile-page" >
        <section className="section-profile-cover section-shaped my-0">
          {/* Circles background */}
          <div className="shape shape-style-1 shape-default alpha-4">
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
        <section className="section">
          <Container>
            <Card className="card-profile shadow mt--300">
              <Row className="justify-content-center">
                <h2 className="font-weight-bold mt-5 mb-5 text-black">
                  <span>Thông tin người dùng</span>
                </h2>
              </Row>
              <div className="px-4">
                <Row className="justify-content-center">
                  <Col
                    className="order-lg-3 text-lg-right align-self-lg-center"
                    lg="4"
                  >
                    <div className="card-profile-actions py-4 mt-lg-0">
                      <Button
                        className="mr-4"
                        color="info"
                        href="#pablo"
                        onClick={handleChange}
                        size="sm"
                      >
                        Chỉnh sửa thông tin
                      </Button>
                    </div>
                  </Col>
                  <Col className="order-lg-1" lg="4">
                    <div className="card-profile-stats d-flex justify-content-center">
                      <div>
                        <span className="heading">22</span>
                        <span className="description">Số đơn hàng đã đặt</span>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="mb-5 mb-md-0" lg="6">
                    <Row style={{ display: 'flex', alignItems: 'center' }}>
                      <Col className="mb-2 mb-lg-4" md="4">
                        <h6>Họ và tên:</h6>
                      </Col>
                      <Col className="mb-2 mb-lg-4" md="8">
                        <h6>{name}</h6>
                      </Col>
                    </Row>
                    <Row style={{ display: 'flex', alignItems: 'center' }}>
                      <Col className="mb-2 mb-lg-4" md="4">
                        <h6>Số điện thoại:</h6>
                      </Col>
                      <Col className="mb-2 mb-lg-4" md="8">
                        <h6>{phone}</h6>
                      </Col>
                    </Row>
                    <Row style={{ display: 'flex', alignItems: 'center' }}>
                      <Col className="mb-2 mb-lg-4" md="4">
                        <h6>Email:</h6>
                      </Col>
                      <Col className="mb-2 mb-lg-4" md="8">
                        <h6>{email}</h6>
                      </Col>
                    </Row>
                    <Row style={{ display: 'flex', alignItems: 'center' }}>
                      <Col className="mb-2 mb-lg-4" md="4">
                        <h6>Tỉnh/Thành phố:</h6>
                      </Col>
                      <Col className="mb-2 mb-lg-4" md="8">
                        <h6>{city}</h6>
                      </Col>
                    </Row>
                    <Row style={{ display: 'flex', alignItems: 'center' }}>
                      <Col className="mb-2 mb-lg-4" md="4">
                        <h6>Quận/Huyện:</h6>
                      </Col>
                      <Col className="mb-2 mb-lg-4" md="8">
                        <h6>{district}</h6>
                      </Col>
                    </Row>
                    <Row style={{ display: 'flex', alignItems: 'center' }}>
                      <Col className="mb-2 mb-lg-4" md="4">
                        <h6>Xã/Phường:</h6>
                      </Col>
                      <Col className="mb-2 mb-lg-4" md="8">
                        <h6>{wards}</h6>
                      </Col>
                    </Row>
                    <Row style={{ display: 'flex', alignItems: 'center' }}>
                      <Col className="mb-2 mb-lg-4" md="4">
                        <h6>Địa chỉ:</h6>
                      </Col>
                      <Col className="mb-2 mb-lg-4" md="8">
                        <h6>{address}</h6>
                      </Col>
                    </Row>
                  </Col>
                  {showChange &&
                    <Col className="mb-5 mb-md-0" lg="6">
                      <Form>
                        <Row style={{ display: 'flex', alignItems: 'center' }}>
                          <Col className="mb-2 mb-md-4" md="4">
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                              <h6>Họ và tên </h6>
                            </div>
                          </Col>
                          <Col className="mb-2 mb-lg-4" md="8">
                            <Input style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }} placeholder='Họ tên của bạn' onChange={inputName} />
                          </Col>
                        </Row>
                        <Row style={{ display: 'flex', alignItems: 'center' }}>
                          <Col className="mb-2 mb-md-4" md="4">
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                              <h6>Số điện thoại </h6>
                            </div>
                          </Col>
                          <Col className="mb-2 mb-lg-4" md="8">
                            <Input style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }} placeholder='Số điện thoại của bạn' onChange={inputPhone} />
                          </Col>
                        </Row>
                        <Row style={{ display: 'flex', alignItems: 'center' }}>
                          <Col className="mb-2 mb-md-4" md="4">
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                              <h6>Email</h6>
                            </div>
                          </Col>
                          <Col className="mb-2 mb-lg-4" md="8">
                            <Input style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }} placeholder='Email của bạn' onChange={inputEmail} />
                          </Col>
                        </Row>
                        <Row style={{ display: 'flex', alignItems: 'center' }}>
                          <Col className="mb-2 mb-md-4" md="4">
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                              <h6>Tỉnh/Thành phố </h6>
                            </div>
                          </Col>
                          <Col className="mb-2 mb-lg-4" md="8">
                            <Input style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }} placeholder='Tỉnh/Thành phố' onChange={inputCity} />
                          </Col>
                        </Row>
                        <Row style={{ display: 'flex', alignItems: 'center' }}>
                          <Col className="mb-2 mb-md-4" md="4">
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                              <h6>Quận/Huyện </h6>
                            </div>
                          </Col>
                          <Col className="mb-2 mb-lg-4" md="8">
                            <Input style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }} placeholder='Quận/Huyện' onChange={inputDistrict} />
                          </Col>
                        </Row>
                        <Row style={{ display: 'flex', alignItems: 'center' }}>
                          <Col className="mb-2 mb-md-4" md="4">
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                              <h6>Xã/Phường </h6>
                            </div>
                          </Col>
                          <Col className="mb-2 mb-lg-4" md="8">
                            <Input style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }} placeHolder='Xã/Phường' onChange={inputWards} />
                          </Col>
                        </Row>
                        <Row style={{ display: 'flex', alignItems: 'center' }}>
                          <Col className="mb-2 mb-md-4" md="4">
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                              <h6>Địa chỉ </h6>
                            </div>
                          </Col>
                          <Col className="mb-2 mb-lg-4" md="8">
                            <Input style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }} placeholder='Ví dụ: Số 20, ngõ 90' onChange={inputAddress} />
                          </Col>
                        </Row>
                        <Button
                          className="mt-3 mb-3"
                          color="warning"
                          href="#pablo"
                          onClick={() => { handleUpdateInfo() }}
                        >
                          Cập nhật
                        </Button>
                      </Form>
                    </Col>
                  }

                </Row>
                <Row style={{ display: 'flex', alignItems: 'center' }}>
                  <Col className="mb-2 mb-lg-4" md="12">
                    <h4 className="mb-2 mb-lg-4" md="4">Lịch sử đơn hàng</h4>
                    <div style={{display: 'flex', gap: '20px'}}>
                      <h6 className="mb-2 mb-lg-4" md="8">{findProduct.title}</h6>
                      <h6 className="mb-2 mb-lg-4" md="8">Số lượng: {quantity} đôi</h6>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
}


export default Profile;

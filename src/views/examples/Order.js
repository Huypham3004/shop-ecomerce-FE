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
    Modal
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import Lightbox from 'react-image-lightbox';
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

const Order = () => {
    const { product_id, product_size } = useParams()
    const { 
        allProductsData, 
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
    const findProduct = allProductsData[product_id];
    console.log(findProduct);

    const [token, setToken] = useState(null);
    const [products, setProducts] = useState([]);

    const [showText1, setShowText1] = useState(true);
    const [showText2, setShowText2] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const [isOpenNewModal, setIsOpenNewModal] = useState(false);

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

    const handleCheckbox1 = () => {
        setShowText1(true);
        setShowText2(false);
    }

    const handleCheckbox2 = () => {
        setShowText1(false);
        setShowText2(true);
    }

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    };

    const openNewModal = () => {
        setIsOpen(false);
        setIsOpenNewModal(true);
    }

    const closeNewModal = () => {
        setIsOpenNewModal(false);
    }

    const inputName = (e) => {
        setName(e.target.value);
    }
    const inputPhone = (e) => {
        setPhone(e.target.value);
    }
    const inputEmail = (e) => {
        setEmail(e.target.value);
    }
    const inputCity = (e) => {
        setCity(e.target.value);
    }
    const inputDistrict = (e) => {
        setDistrict(e.target.value);
    }
    const inputWards = (e) => {
        setWards(e.target.value);
    }
    const inputAddress = (e) => {
        setAddress(e.target.value);
    }
    const inputInfo = (e) => {
        setInfo(e.target.value);
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
                            <span>Thanh toán</span>
                        </h2>
                    </Row>
                    <Row>
                        <Col className="mb-5 mb-md-0" lg="6">
                            <h5 className="mt-lg text-black">
                                <span>Thông tin liên hệ</span>
                            </h5>
                            <Row style={{ display: 'flex', alignItems: 'center' }}>
                                <Col className="mb-2 mb-md-4" md="4">
                                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                        <h6>Họ và tên <span className="text-red">*</span></h6>
                                    </div>
                                </Col>
                                <Col className="mb-2 mb-lg-4" md="8">
                                    <Input style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }} placeHolder='Họ tên của bạn' onChange={inputName} />
                                </Col>
                            </Row>
                            <Row style={{ display: 'flex', alignItems: 'center' }}>
                                <Col className="mb-2 mb-md-4" md="4">
                                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                        <h6>Số điện thoại <span className="text-red">*</span></h6>
                                    </div>
                                </Col>
                                <Col className="mb-2 mb-lg-4" md="8">
                                    <Input style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }} placeHolder='Số điện thoại của bạn' onChange={inputPhone} />
                                </Col>
                            </Row>
                            <Row style={{ display: 'flex', alignItems: 'center' }}>
                                <Col className="mb-2 mb-md-4" md="4">
                                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                        <h6>Email</h6>
                                    </div>
                                </Col>
                                <Col className="mb-2 mb-lg-4" md="8">
                                    <Input style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }} placeHolder='Email của bạn' onChange={inputEmail} />
                                </Col>
                            </Row>
                            <Row style={{ display: 'flex', alignItems: 'center' }}>
                                <Col className="mb-2 mb-md-4" md="4">
                                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                        <h6>Tỉnh/Thành phố <span className="text-red">*</span></h6>
                                    </div>
                                </Col>
                                <Col className="mb-2 mb-lg-4" md="8">
                                    <Input style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }} placeHolder='Tỉnh/Thành phố' onChange={inputCity} />
                                </Col>
                            </Row>
                            <Row style={{ display: 'flex', alignItems: 'center' }}>
                                <Col className="mb-2 mb-md-4" md="4">
                                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                        <h6>Quận/Huyện <span className="text-red">*</span></h6>
                                    </div>
                                </Col>
                                <Col className="mb-2 mb-lg-4" md="8">
                                    <Input style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }} placeHolder='Quận/Huyện' onChange={inputDistrict} />
                                </Col>
                            </Row>
                            <Row style={{ display: 'flex', alignItems: 'center' }}>
                                <Col className="mb-2 mb-md-4" md="4">
                                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                        <h6>Xã/Phường <span className="text-red">*</span></h6>
                                    </div>
                                </Col>
                                <Col className="mb-2 mb-lg-4" md="8">
                                    <Input style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }} placeHolder='Xã/Phường' onChange={inputWards} />
                                </Col>
                            </Row>
                            <Row style={{ display: 'flex', alignItems: 'center' }}>
                                <Col className="mb-2 mb-md-4" md="4">
                                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                        <h6>Địa chỉ <span className="text-red">*</span></h6>
                                    </div>
                                </Col>
                                <Col className="mb-2 mb-lg-4" md="8">
                                    <Input style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }} placeHolder='Ví dụ: Số 20, ngõ 90' onChange={inputAddress} />
                                </Col>
                            </Row>
                            <Row className="mt-3 mb-lg-3" style={{ display: 'flex', justifyContent: 'center' }} >
                                <h5>Thông tin bổ sung</h5>
                            </Row>
                            <Row>
                                <Input style={{ border: 'none', borderBottom: '1px solid gray', borderRadius: '0' }} placeHolder='Ghi chú về đơn hàng, ví dụ: Thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn' onChange={inputInfo} />
                            </Row>
                        </Col>
                        <Col className="mb-5 mb-md-0" lg="6" >
                            <h5 className="mt-lg text-black">
                                <span>Đơn hàng của bạn</span>
                            </h5>
                            <Row style={{ display: 'flex', alignItems: 'center' }}>
                                <Col className="mb-2 mb-md-5" md="10">
                                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                        <img width={80} height={80} src={findProduct.thumbnail} />
                                        <h6>{findProduct.title}, size: {product_size} x {quantity}</h6>
                                    </div>
                                </Col>
                                <Col className="mb-2 mb-lg-5" md="2">
                                    <h6>{totalValue}₫</h6>
                                </Col>
                            </Row>
                            <Row style={{ display: 'flex', alignItems: 'center' }}>
                                <Col className="mb-2 mb-md-5" md="10">
                                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                        <h6>Tạm Tính</h6>
                                    </div>
                                </Col>
                                <Col className="mb-2 mb-lg-5" md="2">
                                    <h6>{totalValue}₫</h6>
                                </Col>
                            </Row>
                            <Row style={{ display: 'flex', alignItems: 'center' }}>
                                <Col className="mb-2 mb-md-5" md="10">
                                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                        <h6>Phí ship</h6>
                                    </div>
                                </Col>
                                <Col className="mb-2 mb-lg-5" md="2">
                                    <h6>{shippingPrice}₫</h6>
                                </Col>
                            </Row>
                            <Row style={{ display: 'flex', alignItems: 'center' }}>
                                <Col className="mb-2 mb-md-5" md="10">
                                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                        <h6>Tổng</h6>
                                    </div>
                                </Col>
                                <Col className="mb-2 mb-lg-5" md="2">
                                    <h6>{totalValue + shippingPrice}₫</h6>
                                </Col>
                            </Row>

                            <div>
                                <Row className='ml-1' style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                    <input type='checkbox' checked={showText1} style={{ height: '20px', width: '20px' }} onChange={handleCheckbox1} />
                                    <span>TRẢ TIỀN MẶT KHI NHẬN HÀNG</span>
                                </Row>
                                {showText1 &&
                                    <Row className='ml-1 mt-3'>
                                        <h6>Bạn đặt hàng và thanh toán sau khi nhân viên bưu điện đưa hàng đến nơi và thu tiền tận nhà bạn.</h6>
                                    </Row>
                                }
                            </div>
                            <div>
                                <Row className='ml-1 mt-3' style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                    <input type='checkbox' checked={showText2} style={{ height: '20px', width: '20px' }} onChange={handleCheckbox2} />
                                    <span>CHUYỂN KHOẢN NGÂN HÀNG</span>
                                </Row>
                                {showText2 &&
                                    <Row className='ml-1 mt-3'>
                                        <h6>Bạn muốn chuyển khoản thanh toán đơn hàng vui lòng nhắn tin vào FB Shop để nhân viên tư vấn hỗ trợ bạn. Cám ơn bạn nhiều ạ!</h6>
                                    </Row>
                                }
                            </div>
                            <Row>
                                <Button
                                    block
                                    color="warning"
                                    size="lg"
                                    type="button"
                                    className="mt-3 mb-3 ml-3"
                                    onClick={openModal}
                                >
                                    Đặt hàng
                                </Button>
                            </Row>
                            <Modal
                                className="modal-dialog-centered"
                                isOpen={isOpen}

                            >
                                <div className="modal-header">
                                    <h6 className="modal-title" id="modal-title-default">
                                        Xác nhận lại thông tin đặt hàng
                                    </h6>
                                    <button
                                        aria-label="Close"
                                        className="close"
                                        data-dismiss="modal"
                                        type="button"
                                        onClick={closeModal}
                                    >
                                        <span aria-hidden={true}>×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p>Họ và tên: {name}</p>
                                    <p>Số điện thoại: {phone}</p>
                                    <p>Email: {email}</p>
                                    <p>Thành phố: {city}</p>
                                    <p>Quận/Huyện: {district}</p>
                                    <p>Xã/Phường: {wards}</p>
                                    <p>Địa chỉ: {address}</p>
                                    <p>Thông tin bổ sung: {info}</p>
                                    <p>Sản phẩm: {findProduct.title}</p>
                                    {showText1 && <p>Trả tiền mặt khi nhận hàng</p>}
                                    {showText2 && <p>Chuyển khoản ngân hàng</p>}
                                </div>
                                <div className="modal-footer">
                                    <Button color="primary" type="button" onClick={openNewModal}>
                                        Xác nhận
                                    </Button>
                                    <Button
                                        className="ml-auto"
                                        color="link"
                                        data-dismiss="modal"
                                        type="button"
                                        onClick={closeModal}
                                    >
                                        Close
                                    </Button>
                                </div>
                            </Modal>
                            <Modal
                                className="modal-dialog-centered"
                                isOpen={isOpenNewModal}

                            >
                                <div className="modal-header">
                                    <h6 className="modal-title" id="modal-title-default">
                                        Cảm ơn bạn đã mua hàng của chúng tôi!
                                        <br />
                                        Bạn có muốn đăng kí thành viên của shop để được hưởng ưu đãi cho các lần mua sau không?
                                    </h6>
                                    <button
                                        aria-label="Close"
                                        className="close"
                                        data-dismiss="modal"
                                        type="button"
                                        onClick={closeNewModal}
                                    >
                                        <span aria-hidden={true}>×</span>
                                    </button>
                                </div>
                                <div className="modal-footer">
                                    <Link to={`/register-page`}>
                                        <Button color="primary" type="button" onClick={closeNewModal}>
                                            Đồng ý
                                        </Button>
                                    </Link>
                                    <Link to={`/landing-page`}>
                                        <Button
                                            className="ml-auto"
                                            color="link"
                                            data-dismiss="modal"
                                            type="button"
                                            onClick={closeNewModal}
                                        >
                                            Không
                                        </Button>
                                    </Link>

                                </div>
                            </Modal>
                        </Col>
                    </Row>
                </Container>
            </main>
            <CardsFooter />
        </>
    );
}

export default Order;

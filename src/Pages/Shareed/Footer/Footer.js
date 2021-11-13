import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../image/logo-p2.png';
import './Footer.css';


const Footer = () => {
    return (
        <div className="mt-5 bg-light">
            <Container className="my-5">
                <Row>
                    <Col md={3} sm={2}>
                        <div className="p-5">
                            <img src={logo} alt="..." />
                            <p className="pt-5 pb-3">Sophisticated simplicity for the
                                independent mind.</p>

                            <span className="p-3" style={{ fontSize: '1.4rem' }}>
                                <i class=" px-3 fab fa-twitter"></i>
                                <i class=" px-3 fab fa-google-plus-g"></i>
                                <i class=" px-3 fab fa-instagram"></i>
                            </span>
                        </div>
                    </Col>
                    <Col md={3} sm={2}>
                        <div className="p-5 footer">
                            <h2>Categories</h2>
                            <ul>
                                <li>Help Center</li>
                                <li>Address Store</li>
                                <li>Privacy Policy</li>
                                <li>Receivers & Amplifiers</li>
                                <li>CantzyStore</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={3} sm={2}>
                        <div className="p-5 footer">
                            <h1>About Us</h1>
                            <ul>
                                <li>Pagination</li>
                                <li>Terms & Conditions</li>
                                <li>Contact</li>
                                <li>Accessories</li>
                                <li>Home Page</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={3} sm={2}>
                        <div className="p-5 footer">
                            <h1>Help & Information</h1>
                            <ul>
                                <li>About Us</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                                <li>Products Return</li>
                                <li>Wholesale Policy</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr />
            <div className="p-3 bg-light text-center">
                © Copyright 2021 | By Akbar Hossain
            </div>
        </div>
    );
};

export default Footer;
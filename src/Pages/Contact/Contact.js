import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import Footer from '../Shareed/Footer/Footer';
import Header from '../Shareed/Header/Header';
import './Contact.css';



const Contact = () => {
    return (
        <div>
            <Header></Header>
            <div className="contact-bg py-5">

                <Container>
                    <Row>
                        <Col md={5} sm={12}>
                            <div>
                                <h1 className="text-center">Contact Page</h1>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Your Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email </Form.Label>
                                        <Form.Control type="email" placeholder="Your Email Please" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Decribtion</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                        <Col md={7} sm={12}></Col>
                    </Row>
                </Container>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default Contact;
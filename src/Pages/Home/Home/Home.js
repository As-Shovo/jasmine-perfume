import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Footer from '../../Shareed/Footer/Footer';
import Header from '../../Shareed/Header/Header';
import Products from '../Products/Products';
import Review from '../Review/Review';
import UpComming from '../UpComming/UpComming';
import './Home.css';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="banner">
                <Container>
                    <div className="banner-body">
                        <Row >
                            <Col sm={12} md={6}>
                                <h1>Be The Attention With <br /> Our Best Fragrant</h1>
                                <p>As ever, this online store remains open, 24/7, for your <br /> perfume, home scent and body care needs.</p>

                                <Button> Click More</Button>
                            </Col>
                            <Col sm={12} md={6}></Col>
                        </Row>
                    </div>
                </Container>
            </div>

            <Products></Products>

            <Review></Review>

            <UpComming></UpComming>

            <Footer></Footer>

        </div>
    );
};

export default Home;
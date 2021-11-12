import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Shareed/Header/Header';
import './Explore.css';

const Explore = () => {


    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/explore')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])



    return (
        <div>
            <Header></Header>
            <h1>Explore Pages {products.length}</h1>

            <Container>
                <Row>
                    {
                        products.map(product => <Col key={product.id} md={3} sm={6}>
                            <div className="product-card">
                                <div className="product-img">
                                    <img src={product.img} alt="..." />
                                </div>
                                <div className="product-info">
                                    <p className="name">{product?.name}</p>
                                    <p><strong>${product?.price}</strong></p>
                                    <p>
                                        {parseInt(product?.rating) === 5 &&
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                        }
                                        {parseInt(product?.rating) === 4 &&
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        }
                                        {parseInt(product?.rating) === 3 &&
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        }
                                        {parseInt(product?.rating) === 2 &&
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        }
                                        {parseInt(product?.rating) === 1 &&
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>

                                            </div>
                                        }
                                    </p>
                                </div>
                                <div>
                                    <Link to={`/orders/${product._id}`}><Button>Buy Now</Button></Link>
                                </div>
                            </div>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Explore;
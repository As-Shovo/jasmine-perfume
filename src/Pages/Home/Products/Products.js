import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Products = () => {

    const [products, setProducts] = useState([]);

    const [spiner, setSpiner] = useState(false);


    useEffect(() => {
        setSpiner(true)
        fetch('https://aqueous-temple-04914.herokuapp.com/products')
            .then(res => res.json())
            .then(result => {
                setProducts(result);
                setSpiner(false)
            })
    }, [])



    return (
        <div className="my-5">
            <h1 className="text-center my-5"> Best Perfume </h1>
            <Container>
                {
                    spiner&& <div className="text-center"><Spinner  animation="grow" variant="info" /></div>
                }

                <Row>
                    {
                        products.map(product => <Col key={product.id} md={4} sm={6}>
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
        </div >
    );
};

export default Products;
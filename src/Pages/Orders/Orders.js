import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Orders = () => {
    const { user, isLoading } = useAuth();

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { register, handleSubmit, reset } = useForm();

    const history = useHistory();


    const [spiner, setSpiner] = useState(false);

    useEffect(() => {
        setSpiner(true)
        fetch(`https://aqueous-temple-04914.herokuapp.com/orders/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data);
                setSpiner(false)
            })
    }, [id]);

    const onSubmit = data => {
        console.log(data);

        setSpiner(true)

        fetch('https://aqueous-temple-04914.herokuapp.com/orders', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    alert('Order Submitted')
                    reset();
                    history.push('/explore');
                    setSpiner(false)
                }
            })
    };





    return (
        <div>
            <h1 className="text-center my-5">Place Your Orders</h1>
            <Container>
                {
                    spiner && <div className="text-center"><Spinner animation="grow" variant="info" /></div>
                }

                <div>
                    {

                        isLoading && <div className="text-center"><Spinner animation="grow" variant="success" /></div>
                    }
                    <Row>
                        <Col md={6} sm={12}>
                            <div className="product-card">
                                <div className="product-img">
                                    <img className="w-75" src={product?.img} alt="..." />
                                </div>
                                <div className="product-info">
                                    <h4 className="name">{product?.name}</h4>
                                    <p><strong>${product?.price}</strong></p>
                                    <p>
                                        {product?.rating === 5 &&
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                        }
                                        {product?.rating === 4 &&
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        }
                                        {product?.rating === 3 &&
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        }
                                        {product?.rating === 2 &&
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        }
                                        {product?.rating === 1 &&
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>

                                            </div>
                                        }
                                    </p>
                                    <p className="dec">{product?.dec}</p>

                                </div>
                            </div>
                        </Col>
                        <Col md={6} sm={12}>
                            <form onSubmit={handleSubmit(onSubmit)} className="form-area mt-5">
                                <h2>Confirm Order</h2>
                                <input placeholder="Your Name" value={user?.displayName} type="text" {...register("name", { required: true })} />
                                <br />
                                <input placeholder="Your Email" value={user?.email} type="email" {...register("email", { required: true })} />
                                <br />
                                <input placeholder="Perfume Name" value={product?.name} {...register("productName", { required: true })} />
                                <br />
                                <input placeholder="Perfume Price" value={product?.price} {...register("productPrice", { required: true })} />
                                <br />
                                <input placeholder="Your Feedback" type="text" {...register("feedback", { required: true })} />
                                <br />
                                <input type="submit" />
                            </form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Orders;
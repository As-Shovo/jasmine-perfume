import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import profile from '../../../image/profile.png';



const Review = () => {

    const [reviews, setReviews] = useState([]);
    const [spiner, setSpiner] = useState(false);

    useEffect(() => {
        setSpiner(true)
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(result => setReviews(result));
        setSpiner(false)
    }, [])

    console.log(reviews);

    return (
        <div className="my-5">
            <h1 className="text-center my-5">Review</h1>
            <Container>
                {
                    spiner && <div className="text-center"><Spinner animation="grow" variant="info" /></div>
                }
                <Row>
                    {
                        reviews.map(review => <Col key={review._id} md={3} sm={12}>
                            <div className="review d-flex flex-column align-items-center text-center" >
                                <img style={{ width: '100px' }} src={profile} alt="..." />
                                <h3>{review?.name}</h3>
                                <p>
                                    {parseInt(review?.rating) === 5 &&
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    }
                                    {parseInt(review?.rating) === 4 &&
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    }
                                    {parseInt(review?.rating) === 3 &&
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    }
                                    {parseInt(review?.rating) === 2 &&
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    }
                                    {parseInt(review?.rating) === 1 &&
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>

                                        </div>
                                    }
                                </p>
                                <p>{review?.review.slice(0, 150)}</p>
                            </div>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Review;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import rating from '../../../image/review.jpg';

const MakeReviews = () => {


    const { register, handleSubmit, reset } = useForm();
    // const [resUser, setResUser] = useState({});
    const onSubmit = data => {
        console.log(data);

        fetch('https://aqueous-temple-04914.herokuapp.com/review', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if(result.acknowledged){
                    alert('Send Your Review');

                    reset();

                }
            })

    };




    return (
        <div>
            <h2> Add A Reviews </h2>
            <Container>
                <Row>
                    <Col md={6} sm={12}>
                        <img className="w-100" src={rating} alt="..." />
                    </Col>
                    <Col md={6} sm={12}>
                        <h2>Leave A Review</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="form-area mt-5">
                            <h2>Register</h2>
                            <input placeholder="Your Name" type="text" {...register("name", { required: true })} />
                            <br />
                            <input placeholder="Your Email" type="email" {...register("email", { required: true })} />
                            <br />
                            <input placeholder="Your Rating" type="number" {...register("rating", { required: true })} />
                            <br />
                            <input placeholder="Review" type="text" {...register("review", { required: true })} />
                            <br />
                            <input type="submit" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MakeReviews;
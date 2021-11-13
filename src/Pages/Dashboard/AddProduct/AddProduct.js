import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddProduct.css';


const AddProduct = () => {


    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        console.log(data);

        fetch('https://aqueous-temple-04914.herokuapp.com/products', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    alert('Submit Product')
                    reset();

                }
            })
    };






    return (
        <div>
            <div className="bacground py-5">

                <Container>
                    <Row>
                        <Col md={6} ></Col>
                        <Col md={6} sm={12} className="" >
                            <h1 style={{ color: "white" }}>Add product</h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="form-area mt-5">

                                <input placeholder="Perfume Name" type="text" {...register("name", { required: true })} />
                                <br />
                                <input placeholder="Photo Url" type="text" {...register("img", { required: true })} />
                                <br />
                                <input placeholder="Decribtion"  {...register("dec", { required: true })} />
                                <br />
                                <input placeholder="Perfume Price" {...register("price", { required: true })} />
                                <br />
                                <input placeholder="Product Rating" type="number" {...register("rating", { required: true }, { min: 1, max: 5 })} />
                                <br />
                                <input type="submit" />
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default AddProduct;
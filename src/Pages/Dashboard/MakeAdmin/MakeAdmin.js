import React, { useState } from 'react';
import { Container, FormControl, InputGroup, Button, Alert, Col, Row } from 'react-bootstrap';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false)

    const handleOnBlue = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = () => {
        const user = { email };
        fetch('https://aqueous-temple-04914.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    console.log(result);
                    setSuccess(true)
                }
            })
    }


    return (
        <div>
            <h1>Make Admin</h1>
            <Container>
                <InputGroup className="mb-3">
                    <FormControl
                        className="w-50"
                        placeholder="Make Admin E-mail"
                        aria-label="E-mail"
                        onBlur={handleOnBlue}
                        typeof="email"
                    />
                    <Button onClick={handleAdminSubmit} variant="outline-secondary" >
                        Make Admin
                    </Button>
                </InputGroup>

                {
                    success && <Alert variant="success">
                        Success fully Add an Admin
                    </Alert>
                }
                <Row>
                    <Col md={4} sm={12}></Col>
                    <Col md={12} sm={12}>
                        <img className="w-100" src="https://i.ibb.co/1f6xn58/admin.jpg" alt="" />
                    </Col>
                    <Col md={4} sm={12}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default MakeAdmin;
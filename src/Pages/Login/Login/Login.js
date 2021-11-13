import React from 'react';
import { Col, Container, Row, Spinner, Button } from 'react-bootstrap';
import Header from '../../Shareed/Header/Header';
import { useForm } from "react-hook-form";



import './login.css';
import loginImg from '../../../image/login-img.jpg';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Register from '../Register/Register';
import { useHistory, useLocation } from 'react-router';


const Login = () => {


    const { signInUsingGoogle, signInEmailPasswordUser, isLoading } = useAuth();
    const history = useHistory();
    const location = useLocation();

    const { register, handleSubmit } = useForm();
    // const [resUser, setResUser] = useState({});
    const onSubmit = data => {
        // setResUser(data);
        signInEmailUser(data.email, data.password);
        // console.log(resUser);

    };

    const [isLogin, setIsLogin] = useState(true);



    const isRegister = (is) => {
        setIsLogin(is);
    };

    const handleGoogleSignin = () => {
        // console.log('object');
        signInUsingGoogle(location, history);

    };



    const signInEmailUser = (email, password) => {
        // console.log(resUser.email, resUser.password);
        signInEmailPasswordUser(email, password, location, history);
    }

    // console.log(resUser.email);


    return (
        <div>
            <Header></Header>

            <Container>
                {

                    isLoading && <div className="text-center"><Spinner animation="grow" variant="success" /></div>
                }
                <div>
                    <Row>
                        <Col md={6} sm={12}>
                            <img className="w-100 mt-5" src={loginImg} alt="..." />
                        </Col>
                        <Col md={6} sm={12} className="mt-5">
                            <div>
                                {
                                    isLogin ? <form onSubmit={handleSubmit(onSubmit)} className="form-area mt-5">
                                        <h2>Login </h2>
                                        <input placeholder="Your Email" type="email" {...register("email", { required: true })} />
                                        <br />
                                        <input placeholder="Your Password" type="password" {...register("password", { required: true })} />
                                        <br />
                                        <input type="submit" />

                                        <span onClick={() => isRegister(false)}>Create a New Account</span>
                                    </form>
                                        : <Register setIsLogin={setIsLogin}></Register>
                                }
                                <br />
                                <br />
                                <div className="text-center">
                                    <p>Login With</p>
                                    <Button onClick={handleGoogleSignin}><i className="fab fa-google mx-3"></i>Google</Button>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Login;
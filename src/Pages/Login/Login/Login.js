import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../../Shareed/Header/Header';
import { useForm } from "react-hook-form";



import './login.css';
import loginImg from '../../../image/login-img.jpg';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Register from '../Register/Register';
import { useHistory, useLocation } from 'react-router';


const Login = () => {


    const { signInUsingGoogle, signInEmailPasswordUser } = useAuth();
    const history = useHistory();
    const location = useLocation();

    const { register, handleSubmit } = useForm();
    const [resUser, setResUser] = useState({});
    const onSubmit = data => {
        setResUser(data);
        console.log(resUser);
        signInEmailUser();

    };

    const [isLogin, setIsLogin] = useState(true);



    const isRegister = (is) => {
        setIsLogin(is);
    };

    const handleGoogleSignin = () => {
        console.log('object');
        signInUsingGoogle(location, history);

    };



    const signInEmailUser = () => {
        console.log(resUser.email, resUser.password);
        signInEmailPasswordUser(resUser.email, resUser.password, location, history);
    }

    console.log(resUser.email);


    return (
        <div>
            <Header></Header>

            <Container>
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
                                    <button onClick={handleGoogleSignin}>Google</button>
                                    <button>Github</button>
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
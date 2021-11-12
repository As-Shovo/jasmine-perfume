import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Register = ({ setIsLogin }) => {
    const { emailPasswordCreateUser } = useAuth();

    const history = useHistory();

    const { register, handleSubmit } = useForm();
    const [resUser, setResUser] = useState({});
    const onSubmit = data => {
        setResUser(data);
        console.log(resUser);
        createUser();

    };

    const createUser = () => {
        // console.log(resUser.email, resUser.password, resUser.name, resUser.imgUrl);
        emailPasswordCreateUser(resUser.email, resUser.password, resUser.name, resUser.imgUrl, history);
        console.log(resUser);
        // reset();
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-area mt-5">
            <h2>Register</h2>
            <input placeholder="Your Name" type="text" {...register("name", { required: true })} />
            <br />
            <input placeholder="Your Email" type="email" {...register("email", { required: true })} />
            <br />
            <input placeholder="Your Image Url" {...register("imgUrl", { required: true })} />
            <br />
            <input placeholder="Your Password" type="password" {...register("password", { required: true })} />
            <br />
            <input type="submit" />

            <p>Already Registered?</p> <span onClick={() => setIsLogin(true)}>Sign Up</span>
        </form>
    );
};

export default Register;
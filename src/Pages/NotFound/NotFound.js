import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notFound">
            <h1>404</h1>
            <p>Not Found</p>
            <Link to="/home"><Button>Go Home</Button></Link>
        </div>
    );
};

export default NotFound;
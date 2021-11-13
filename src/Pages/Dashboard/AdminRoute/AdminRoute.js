import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {

    const { user, admin, isLoading, spiner } = useAuth();


    if (isLoading) {
        return <div className="text-center"><Spinner animation="border" className="mt-5 my-5 mx-auto text-center" variant="success"></Spinner></div>
    }





    spiner && <div className="text-center"><Spinner animation="grow" variant="info" /></div>
    console.log(admin);
    if (!admin) {
        spiner && <div className="text-center"><Spinner animation="grow" variant="info" /></div>
        spiner && <div className="text-center"><Spinner animation="grow" variant="success" /></div>
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;
import React from 'react';
import './Dashboard.css'
import { Container, Nav, Button, Spinner } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Payment from '../Payment/Payment';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MakeReviews from '../MakeReviews/MakeReviews';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../AdminRoute/AdminRoute';



const Dashboard = () => {

    const { user, handleSignOut, admin, spiner, isLoading } = useAuth();

    let { path, url } = useRouteMatch();
    return (
        <div className='text-center'>


            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to={`${url}`}>Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-content-end flex-grow-1 pe-3 dashbord">
                            <Nav.Link as={Link} to={`/home`}>Home</Nav.Link>
                            <Nav.Link as={Link} to={`/explore`}>Orders</Nav.Link>
                            <Nav.Link as={Link} to={`${url}/myOrders`}>My Orders</Nav.Link>
                            <Nav.Link as={Link} to={`${url}/payment`}>Payment</Nav.Link>
                            <Nav.Link as={Link} to={`${url}/reviews`}>Reviews</Nav.Link>
                            {
                                admin && <Nav className="justify-content-end flex-grow-1 pe-1 dashbord">

                                    <Nav.Link as={Link} to={`${url}/manageOrders`}>Manage All Orders</Nav.Link>
                                    <Nav.Link as={Link} to={`${url}/addProduct`}>Add Product</Nav.Link>
                                    <Nav.Link as={Link} to={`${url}/manageProducts`}>Manage Products</Nav.Link>
                                    <Nav.Link as={Link} to={`${url}/makeAdmin`}>Make Admin</Nav.Link>
                                </Nav>
                            }
                        </Nav>

                        <Button className='custom-btn' onClick={handleSignOut} style={{ margin: '10px 20px', width: '200px' }}>LogOut</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <h1 className="my-4">Welcome Dashboard {user?.displayName}</h1>
            {
                spiner && <div className="text-center"><Spinner animation="grow" variant="info" /></div>
            }
            <div className="my-2">--------------------------------------------------------------------------------------------------------</div>
            {

                isLoading && <div className="text-center"><Spinner animation="grow" variant="success" /></div>
            }
            <Switch>
                <Route path={`${path}/myOrders`}>
                    <MyOrders></MyOrders>
                </Route>
                <AdminRoute path={`${path}/manageOrders`}>
                    <ManageOrders></ManageOrders>
                </AdminRoute>
                <AdminRoute path={`${path}/addProduct`}>
                    <AddProduct></AddProduct>
                </AdminRoute>
                <AdminRoute path={`${path}/manageProducts`}>
                    <ManageProducts></ManageProducts>
                </AdminRoute>
                <AdminRoute path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </AdminRoute>
                <Route path={`${path}/payment`}>
                    <Payment></Payment>
                </Route>
                <Route path={`${path}/reviews`}>
                    <MakeReviews></MakeReviews>
                </Route>
            </Switch>
        </div>
    );
};

export default Dashboard;
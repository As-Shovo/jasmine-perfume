import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../image/logo-p.png';
import './Header.css';




const Header = () => {

    const { user, handleSignOut } = useAuth();
    // console.log(user);


    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/"><img className="logo" src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} className="a-link" to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} className="a-link" to="/explore">Explore</Nav.Link>
                        <Nav.Link as={Link} className="a-link" to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} className="a-link" to="/dashboard">Dashboard</Nav.Link>
                        {
                            user.email ?
                                <Button className="" onClick={handleSignOut}>Logout</Button> :

                                <Link to="/login"><Button className="">Login</Button></Link>
                        }
                        <span>{user?.displayName}</span>


                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
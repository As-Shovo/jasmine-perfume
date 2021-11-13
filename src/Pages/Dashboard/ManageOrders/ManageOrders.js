import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageOrders = () => {

    const {spiner} = useAuth();

    const [orders, setOrders] = useState([]);
    const [spineer, setSpiner] = useState(false);


    useEffect(() => {
        setSpiner(true);
        fetch("https://aqueous-temple-04914.herokuapp.com/myOrders")
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setOrders(result)
                setSpiner(false)
            })
    }, [])




    const handleDelete = (id) => {
        setSpiner(true);

        fetch(`https://aqueous-temple-04914.herokuapp.com/myOrders/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.deletedCount) {
                    alert("deleted !!!");
                    const remaining = orders.filter(md => md._id !== id);
                    setOrders(remaining);
                    setSpiner(false)
                }
            })
    };


    const handleUserUpdate = (id) => {
        const url = `https://aqueous-temple-04914.herokuapp.com/myOrders/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.acknowledged) {
                    alert('Success Fully Update Data')
                }
            })
    }




    return (
        <div>
            <h2>Manage Orders </h2>
            {
                    spiner&& <div className="text-center"><Spinner  animation="grow" variant="success" /></div>
                }
            <Container>
                {
                    spineer && <div className="text-center"><Spinner animation="grow" variant="info" /></div>
                }
                <Table striped bordered hover responsive size="sm">
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((od, index) => <tr key={od._id}>
                                <td>{index + 1}</td>
                                <td>{od?.name}</td>
                                <td>{od?.email}</td>
                                <td>{od?.productName}</td>
                                <td>{od?.productPrice}</td>
                                <td><button className="btn btn-primary" onClick={() => handleUserUpdate(od._id)}>Aproved</button></td>
                                <td><button onClick={() => handleDelete(od._id)} className="btn btn-danger">Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </Table>
            </Container>

        </div>
    );
};

export default ManageOrders;
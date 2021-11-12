import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';

const ManageOrders = () => {

    const [orders, setOrders] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5000/myOrders")
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setOrders(result)
            })
    }, [])




    const handleDelete = (id) => {

        fetch(`http://localhost:5000/myOrders/${id}`, {
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
                }
            })
    };


    const handleUserUpdate = (id)=>{
        const url = `http://localhost:5000/myOrders/${id}`;
        fetch(url,{
            method: "PUT",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify()
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            if(result.acknowledged){
                alert('Success Fully Update Data')
            }
        })
    }




    return (
        <div>
            <h2>Manage Orders </h2>
            <Container>
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
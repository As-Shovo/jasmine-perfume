import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const UpComming = () => {

    const upComing = [
        { id: 1, name: "Kom Kom", img: "https://i.ibb.co/QvwQfq7/kom-kom.jpg", dec: "This is a very heavy sandalwood perfume. The flowers and coconut are supporting notes, so not the stars of the show Terracotta by is a white floral vanilla with unmistakable strong white floral signiture and is only supported by vanilla" },
        { id: 2, name: "Sim Dim", img: "https://i.ibb.co/MRMLNvX/sim-dim.jpg", dec: "Very aquatic in an artificial way, but I still enjoy it. The melon here reminds me of Issey Miyake l’eau d’issey but smells a bit cheaper. Water lily is also prominent. It doesn’t smell like rain at all, but I didn’t expect to do in the first place. I love all kinds of aquatics and this is no exception." },
        { id: 3, name: "Impression", img: "https://i.ibb.co/jrVKCYb/impression.jpg", dec: "This fragrance is amazing! It has such a nostalgic touch to it that I just cannot put my finger on. I got the body mist version and wore it while travelling in the airport and it lasted the whole 10 hour day! My fiancé got this for me as an anniversary gift and we went to the store to smell it." }
    ]


    return (
        <div className="my-5">
            <h1 className="text-center my-5">Up Comming</h1>
            <Container>
                <Row>
                    {
                        upComing.map(up => <Col key={up.id} md={4} sm={12}>
                            <div className="card text-center">
                                <img className="card-img-top" src={up?.img} alt="..." />
                                <div className="card-body">
                                    <h3 className="text-muted">New</h3>
                                    <p>-----------------------</p>
                                    <h4 className="card-title">{up.name}</h4>
                                    <p className="card-text">{up.dec.slice(0, 150)}</p>
                                </div>
                            </div>
                        </Col>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default UpComming;
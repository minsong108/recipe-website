import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './box.css';

const OriginalSearch = () => {

    const cardInfo = [
        { image: "https://0.soompi.io/wp-content/uploads/2017/05/10061449/VIXX32.jpg?s=900x600&e=t",
         title: "Vixx", text: "GOOD" },
        { image: "https://i2.wp.com/hype.my/wp-content/uploads/2017/05/ikon-comebcak.jpg?fit=2000%2C1373&ssl=1",
         title: "ikon", text: "Awesome" },
        { image: "https://0.soompi.io/wp-content/uploads/2020/05/25021057/lee-soo-hyuk-1-2.jpg",
         title: "Lee Soo Hyuk", text: "Handsome" },
        { image: "https://0.soompi.io/wp-content/uploads/2018/01/01182544/Wanna-One.jpg",
         title: "Wanna one", text: "Great" }
    ];

    const renderCard = (card, index) => {
        return (
            <Card style={{ width: '18rem' }} key={index} className="box">
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
            </Card.Body>
            </Card>
        )
    }

    return (
        <div className="grid">
            {cardInfo.map(renderCard)}
        </div>
    )

}

export default OriginalSearch
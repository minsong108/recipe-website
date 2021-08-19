import React from 'react';
import { Card } from 'react-bootstrap';
import useFirestore from '../../hooks/useFirestore';
import '../../pages/box.css';
import { projectFirestore } from '../../firebase'

import Image from './Image'

const ImageGrid = () => {

    const { docs } = useFirestore('post');

    return (
        <div className="grid">
            
            { docs && docs.map(doc => (
                // <div className="img-wrap" key={doc.id}>
                //     <img src={doc.url} alt="uploaded pic" />
                // </div>

                <Card style={{ width: '18rem' }} key={doc.id} className="box">
                <Card.Img variant="top" src={doc.url} />
                <Card.Body>
                    <Card.Title>{doc.title}</Card.Title>
                    <Card.Text>{doc.caption}</Card.Text>
                </Card.Body>
                </Card>
            ))}
        </div>
    )

}

export default ImageGrid;
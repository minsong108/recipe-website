import React, { useState } from 'react';
import useFirestore from '../../hooks/useFirestore';
import { auth, projectFirestore } from '../../firebase';
import '../box.css'
import { Card } from 'react-bootstrap'
import ReactPlayer from 'react-player';

const MyFavorite = () => {

    const [readMore, setReadMore] = useState(false);

    const user = auth.currentUser;
    console.log(user.uid+"-favorite")

    const { docs } = useFirestore(user.uid+"-favorite");
    console.log(docs)

    const deleteFavorite = (docId) => {

        projectFirestore.collection(user.uid+"-favorite").doc(docId).delete().then(() => {

        }).catch((err) => {
            console.log("Error deleting in user page")
        })
    }

    return (
        <div>

            <h1 style={styles.title}>Your Favorite Recipes</h1>

            <div className="favGrid" style={styles.containerStyle}>

                { docs && docs.map((doc) => {

                    if (doc.type == "recipe") {
                        
                        return (

                            <Card 
                                style={{
                                    width: '18rem', 
                                    justifyContent: "center", 
                                    alignContent: "center",
                                    alignItems: "center"
                                }} 
                                className="box"
                            >
                                
                                <Card.Title>
                                    <h2 style={styles.infoLabel}>
                                        {doc.title}  
                                    </h2>
                                </Card.Title>

                                <Card.Body>
                                    <Card.Img variant="top" src={doc.image} />
                                    
                                    <Card.Text>
                                        <h5 style={{color: '#FF5657'}} class="text-decoration-underline">
                                            Source Name: 
                                        </h5>

                                        <h6>
                                            {doc.sourceName}
                                        </h6>
                                    </Card.Text>

                                    <Card.Text>
                                        <h5 style={{color: '#FF5657'}} class="text-decoration-underline">
                                            Source Link: 
                                        </h5>

                                        <a target="_blank" href={doc.url}>
                                            <h6>
                                                {doc.url}
                                            </h6>
                                        </a>
                                    </Card.Text>

                                    <Card.Text>
                                        <h5 style={{color: '#FF5657'}} class="text-decoration-underline">
                                            Summary:
                                        </h5>
                                        {doc.summary}
                                    </Card.Text>

                                    {/* <Card.Text>
                                        {readMore ? doc.summary : (doc.summary).slice(0, 150)}
                                    </Card.Text>

                                    <span onClick={() => setReadMore(!readMore)}>
                                        <button>
                                            {readMore ? "Show Less" : "Show More"}
                                        </button>
                                    </span> */}
                                </Card.Body>

                                <button
                                    style={styles.infoButton}
                                    onClick={() => deleteFavorite(doc.id)}
                                >
                                    Remove from Favorite List
                                </button>

                            </Card>
                        )
                    }
                    else {

                        return (

                            <Card 
                                style={{
                                    width: '18rem', 
                                    justifyContent: "center", 
                                    alignContent: "center",
                                    alignItems: "center"
                                }} 
                                className="box"
                            >
                                <Card.Title>
                                    <h2 style={styles.infoLabel}>
                                        {doc.title}
                                    </h2>
                                </Card.Title>

                                
                                <ReactPlayer 
                                    url={doc.url}
                                    controls={true}
                                    width='100%'
                                    align-items='center'
                                />

                                <Card.Text>
                                    <h4 style={{color: '#FF5657'}} class="text-decoration-underline">
                                        Channel Title:
                                    </h4>

                                    <h5>
                                        {doc.channel}
                                    </h5>
                                </Card.Text>

                                <Card.Text>
                                    <h4 style={{color: '#FF5657'}} class="text-decoration-underline">
                                        Description:
                                    </h4>

                                    <h5>
                                        {doc.description}
                                    </h5>
                                </Card.Text>

                                <button 
                                    style={styles.infoButton}
                                    onClick={() => deleteFavorite(doc.id)}
                                >
                                    Remove from Favorite List
                                </button>

                            </Card>
                        )
                    }
                })}
            </div>

        </div>
    )
}


const styles = {

    containerStyle: {
        backgroundColor: "#F2D9BB",
        borderWidth: 3,
        borderColor: "#EDBF88"
    },

    title: {
        color: '#FF5657',
        marginTop: 50,
        marginBottom: 40,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        fontFamily: "sans-serif"
    },

    infoLabel: {
        color: '#376C8A',
        fontFamily: "sans-serif",
        marginTop: 20,
        marginBottom: 10,
        fontSize: 30
    },

    label: {
        fontSize: 20,
        fontFamily: "sans-serif",
        marginBottom: 5
    },

    input: {
        width: 400,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
        marginLeft: 50
    },

    infoButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 350,
        marginTop: 10,
        marginBottom: 40,
        backgroundColor: "#F2D9BB",
        borderColor: "#EDBF88"
    },

    card: {
        borderColor: "#EDBF88",
        borderWidth: 5
    },

    cardButton: {
        width: 80,
        height: 40,
        margin: 15,
        fontFamily: "sans-serif",
        borderColor: "#EDBF88",
        color: "#FF4500",
        backgroundColor: "#FED8B1",
    }
}

export default MyFavorite;
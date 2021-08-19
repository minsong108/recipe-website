import React, { useState } from 'react';
import useFirestore from '../../hooks/useFirestore';
import { auth } from '/react/scheduler/client/src/firebase';
import { projectFirestore } from '../../firebase';
import '../box.css'
import { Card } from 'react-bootstrap'

const MyPost = () => {

    const user = auth.currentUser;
    const { docs } = useFirestore(auth.currentUser.uid);

    const [newTitle, setNewTitle] = useState(null);
    const [newCaption, setNewCaption] = useState(null);

    const updatePost = (docId) => {
        console.log("update clicked")
        console.log(docId)

        if (newTitle == null && newCaption == null) {

            alert("No Change Entered. Nothing is updated")

        }
        else if (newTitle != null && newCaption == null) {

            projectFirestore.collection(user.uid).doc(docId).update({
                title: newTitle
            }).then(() => {
                
                projectFirestore.collection('post').doc(docId).update({
                    title: newTitle 
                }).then(() => {
                    window.location = '/post';
                }).catch((err) => {
                    console.log("Error updating in post")
                })

            }).catch((err) => {
                console.log("Error updating in user page")
            })
        }
        else if (newTitle == null && newCaption != null) {

            projectFirestore.collection(user.uid).doc(docId).update({
                caption: newCaption
            }).then(() => {
                
                projectFirestore.collection('post').doc(docId).update({
                    caption: newCaption   
                }).then(() => {
                    window.location = '/post';
                }).catch((err) => {
                    console.log("Error updating in post")
                })

            }).catch((err) => {
                console.log("Error updating in user page")
            })
        }
        else {

            projectFirestore.collection(user.uid).doc(docId).update({
                title: newTitle,
                caption: newCaption
            }).then(() => {
                
                projectFirestore.collection('post').doc(docId).update({
                    title: newTitle,
                    caption: newCaption
                }).then(() => {
                    window.location = '/post';
                }).catch((err) => {
                    console.log("Error updating in post")
                })

            }).catch((err) => {
                console.log("Error updating in user page")
            })
        }
        
    }

    const deletePost = (docId) => {

        projectFirestore.collection(user.uid).doc(docId).delete().then(() => {

            projectFirestore.collection('post').doc(docId).delete().then(() => {
                console.log("Delete Successful");
            }).catch((err) => {
                console.log("Error deleting in post")
            });
        }).catch((err) => {
            console.log("Error deleting in user page")
        })
    }

    return (

        <div>
            <h1 style={styles.title}>Your dishes</h1>
            <div className="grid" style={styles.card}>
                { docs && docs.map(doc => (

                    <Card style={{ width: '18rem' }} key={doc.id} className="box">
                    <Card.Img variant="top" src={doc.url} />
                    <Card.Body>

                        <Card.Title>
                            <input
                                type="text"
                                defaultValue={doc.title}
                                placeholder="Enter Title"
                                onChange={(e) => {
                                    if (e == null) {
                                        setNewTitle(doc.title)
                                    }
                                    else {
                                        setNewTitle(e.target.value)
                                    }
                                }}
                            />
                        </Card.Title>

                        <Card.Text>
                            <input
                                type="text"
                                defaultValue={doc.caption}
                                placeholder="Enter Caption"
                                onChange={(e) => {
                                    if (e == null) {
                                        setNewCaption(doc.caption)
                                    }
                                    else {
                                        setNewCaption(e.target.value)
                                    }
                                }}
                            />
                        </Card.Text>
                         
                        <button style={styles.cardButton} onClick={() => updatePost(doc.id)}>Update</button>
                        <button style={styles.cardButton} onClick={() => deletePost(doc.id)}>Delete</button>
                    </Card.Body>
                    </Card>
                ))}

            </div>
        </div>
    )
}

const styles = {

    containerStyle: {
        width: 500,
        height: 400,
        justifyContent: "center",
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
        width: 300,
        marginLeft: 100,
        marginBottom: 20,
        backgroundColor: "#FE994A",
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

export default MyPost
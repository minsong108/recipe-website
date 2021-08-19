import React, { useState } from 'react';
import useFirestore from '../../hooks/useFirestore';
import { auth } from '/react/scheduler/client/src/firebase';
import { projectFirestore } from '../../firebase';
import '../box.css'
import { Card } from 'react-bootstrap'

const MyInformation = () => {

    const user = auth.currentUser;

    const [newEmail, setNewEmail] = useState(null);
    const [newPassword, setNewPassword] = useState(null);

    const updateEmail = () => {
        console.log("updateEmail clicked")
        user.updateEmail(newEmail).then(() => {
            alert("Email Changed Successfully")
        }).catch((err) => {
            alert("Email Change Failed. Please Try Again")
        })
    }

    const updatePassword = () => {
        console.log("updatePassword clicked")
        user.updatePassword(newPassword).then(() => {
            alert("Password Changed Successfully")
        }).catch((err) => {
            alert("Password Change Failed. Please Try Again")
        })
    }

    return (

        <div>
            <h1 style={styles.title}>Your Account Page</h1>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '70vh'
                }}
            >
                <div>
                <label style={styles.infoLabel}>Your Information</label>

                {/* <Card style={{ width: '40rem', height: '30rem', justifyContent: 'center'}} className="post"> */}
                <Card style={styles.containerStyle}>

                    <label style={styles.label}>Email</label>
                    {/* <input style={{ width: '30rem', height: '2rem', justifyContent: 'left', margin: '10px'}} */}
                    <input style={styles.input}
                        type="text"
                        defaultValue={auth.currentUser.email}
                        placeholder="Enter New Email"
                        onChange={(e) => {
                            setNewEmail(e.target.value)
                        }}
                    />
                    <label style={styles.label}>Password</label>
                    {/* <input style={{ width: '30rem', height: '2rem', justifyContent: 'left', margin: '10px'}} */}
                    <input style={styles.input}
                        type="text"
                        placeholder="Enter New Password"
                        onChange={(e) => {
                            setNewPassword(e.target.value)
                        }}
                    />
                    <button style={styles.infoButton} onClick={updateEmail}>Update Email</button>
                    <button style={styles.infoButton} onClick={updatePassword}>Update Password</button>
                </Card>
                </div>
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
        marginBottom: 10,
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

export default MyInformation
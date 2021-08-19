import React, { useRef, useState } from 'react';
import { auth, projectFirestore } from '../firebase';
import { Card } from 'react-bootstrap';
import './SignUp.css';

const Sign_Up = () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const [signInErr, setSignInErr] = useState(null);
    const [signUpErr, setSignUpErr] = useState(null);

    const signUp = e => {
        e.preventDefault();
        setSignUpErr(null);

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
            setSignUpErr(err.message);
        })
    }

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err.message)
            setSignInErr(err.message + '\n' + "Please Try Again");
        })
    }

    return (

        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div>
                <h1 style={styles.title}>Welcome to Claire's Kitchen!</h1>
                <h5 style={styles.instruction}>Use the box to complete registration</h5>

                {/* <Card style={{ width: '25rem', height: '30rem', justifyContent: 'center', marginLeft: '30rem'}}> */}
                <Card style={styles.containerStyle}>
                    <label style={styles.label}>Email</label>
                    <input style={styles.input}
                        ref={emailRef}
                        type="text"
                        name="email"
                        placeholder="Enter email"
                    />

                    <label style={styles.label}>Password</label>
                    <input style={styles.input}
                        ref={passwordRef}
                        type="text"
                        name="password"
                        placeholder="Enter password"
                    />

                    <button style={styles.button} onClick={signUp}>Sign Up!</button>

                    <label style={{marginBottom: 10, color: '#376C8A'}}>Already a user? Click Sign-In</label>
                    <button style={styles.button} onClick={signIn}>Sign In</button>
                    { signInErr && <div style={styles.error}>{signInErr}</div> }
                    { signUpErr && <div style={styles.error}>{signUpErr}</div>}
                </Card>
            </div>
        </div>
    )
}

const styles = {

    containerStyle: {
        width: 400,
        height: 500,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 50,
        borderColor: "#FED8B1",
        borderWidth: 5
    },

    label: {
        fontSize: 20,
        fontFamily: "sans-serif",
        marginBottom: 5
    },

    input: {
        width: 300,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
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

    instruction: {
        color: '#376C8A',
        fontFamily: "sans-serif",
        marginBottom: 30,
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    },

    error: {
        fontSize: 15,
        color: '#F43C3C',
        justifyContent: "center",
        alignItems: "center"
    },
    
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
        backgroundColor: "#FED8B1",
        color: "#FF4500",
        borderColor: "#EDBF88",
        marginBottom: 10
    }
}

export default Sign_Up
import firebase from 'firebase'
//import * as firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDvLcMcapEjA4Qz4hi3a-sXhRsvRRiy3IM",
    authDomain: "recipe-web-1c9e5.firebaseapp.com",
    projectId: "recipe-web-1c9e5",
    storageBucket: "recipe-web-1c9e5.appspot.com",
    messagingSenderId: "349021989460",
    appId: "1:349021989460:web:bd5bf374c2d0cfafa4dbc1"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//const db = firebase.firestore();
const auth = firebase.auth();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export {auth, projectStorage, projectFirestore, timeStamp };
//export default db;
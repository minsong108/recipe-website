import React, { useState, useEffect } from 'react';
import  useStorage from '/react/scheduler/client/src/hooks/useStorage';
import '/react/scheduler/client/src/index.css'
import { projectStorage, projectFirestore, timeStamp } from '../../firebase';

import { auth } from '../../firebase';

const ProgressBar = ({ image, setImage, title, setTitle, caption, setCaption, setSubmit }) => {

    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {

        const storageRef = projectStorage.ref(image.name);
        const collectionRef = projectFirestore.collection(auth.currentUser.uid);
        const postList = projectFirestore.collection('post');

        storageRef.put(image).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timeStamp();
            
            collectionRef.add({ url, createdAt, title, caption }).then(docRef => {
                postList.doc(docRef.id).set({ url, createdAt, title, caption });
            })

            setUrl(url);
        })
    }, [image]);

    useEffect(() => {
        if (url) {
            setImage(null);
            setTitle(null);
            setCaption(null);
            setSubmit(null);
        }
    }, [url])

    return (
        <div className="progress-bar" style={{ width: progress + '%' }}></div>
    )
}

export default ProgressBar;
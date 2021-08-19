import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase";

const useFirestore = (collection) => {

    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documets = [];
                snap.forEach(doc => {
                    documets.push({...doc.data(), id: doc.id})
                });
                setDocs(documets);
            });

        return () => unsub();

    }, [collection])
    return { docs };
}

export default useFirestore;
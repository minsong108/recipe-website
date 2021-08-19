import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import '../box.css';
import ReactPlayer from 'react-player';

import { projectFirestore, auth, timeStamp } from '../../firebase';

export default function youtube ({ video }) {

  console.log("In youtube.js:");
  console.log(video);

  const favorite = () => {

    const favoriteCollectionRef = projectFirestore.collection(auth.currentUser.uid+"-favorite");

    const createdAt = timeStamp();

    favoriteCollectionRef.doc(video.id.videoId).set({ 
      createdAt,
      type: "youtube", 
      title: video.snippet.title,
      url:  `https://m.youtube.com/watch?v=${video.id.videoId}`,
      channel: video.snippet.channelTitle,
      description: video.snippet.description
    })
  }


  return (
    <div>
        <Card style={styles.containerStyle}>
        
          <Card.Title>
            <h1 style={styles.title} class="text-decoration-underline">
              {video.snippet.title}
            </h1>
          </Card.Title>

          
          <ReactPlayer 
            url={`https://m.youtube.com/watch?v=${video.id.videoId}`}
            controls={true}
            width='100%'
            align-items='center'
          />
          
          <Card.Body>
            <h4 style={styles.label} class="text-decoration-underline">
              Channel Title:
            </h4>

            <h5>
              {video.snippet.channelTitle}
            </h5>

            <h4 style={styles.label} class="text-decoration-underline">
              Description:
            </h4>

            <h5>
              {video.snippet.description}
            </h5>

            <button style={{borderColor: '#FF5657'}} onClick={favorite}>Add to Favorite</button>
          </Card.Body>

        </Card>
    </div>
  )
}

const styles = {
  containerStyle: {
    marginBottom: 50,
    marginLeft: 10,
    marginRight: 10,
    flex: 0.3,
    backgroundColor: "#F2D9BB",
    borderWidth: 5,
    borderColor: "#EDBF88"
  },

  title: {
    color: '#FF5657'
  },

  label: {
    color: '#376C8A'
  }
};
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import ProgressBar from './ProgressBar'

const UploadForm = () => {

    const [image, setImage] = useState(null);
    const [imageErr, setImageErr] = useState(null);
    const types = ['image/png', 'image/jpeg'];

    const [title, setTitle] = useState("");
    const [caption, setCaption] = useState("");
    const [submit, setSubmit] = useState(null);

    const imageOnChange = (e) => {
        let selected = e.target.files[0];
        console.log(selected);
        
        if (selected && types.includes(selected.type)) {
            setImage(selected);
            setImageErr("");
        }
        else {
            setImage(null);
            setImageErr("Please select an image file (ppng or jpeg)");
        }
    }

    const titleOnChange = (e) => {
        setTitle(e.target.value);
    }

    const captionOnChange = (e) => {
        setCaption(e.target.value);
    }

    const handleClick = () => {
        setSubmit(true)
    }

    
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '70vh'
            }}
        >

            <div>
                <h1 style={styles.pageTitle}>Post and Share your Kitchen!</h1>

                {/* <Card style={{ width: '40rem', height: '30rem', justifyContent: 'center'}} className="post"> */}
                <Card style={styles.containerStyle} className="post">

                    <label style={styles.label}>Choose your image</label>
                    <input style={{ width: '30rem', height: '2rem', justifyContent: 'center', margin: '10px'}}
                        type="file"
                        name="image"
                        placeholder="Choose Your Image of Your Dish"
                        onChange={imageOnChange}
                    />
                    <div>
                        { imageErr && <div className="error">{ imageErr } </div> }
                    </div>


                    <label style={styles.label}>Title of Your Post</label>
                    {/* <input style={{ width: '30rem', height: '2rem', justifyContent: 'left', margin: '10px'}} */}
                    <input style={styles.titleInput}
                        type="text"
                        name="title"
                        placeholder="Enter Name of Your Dish"
                        onChange={titleOnChange}
                    />


                    <label style={styles.label}>Caption of Your Dish</label>
                    {/* <input style={{ width: '30rem', height: '5rem', justifyContent: 'left', margin: '10px'}} */}
                    <input style={styles.captionInput}
                        type="text"
                        name="caption"
                        placeholder="Enter Caption of Your Dish"
                        onChange={captionOnChange}
                    />


                    <button style={styles.button} onClick={handleClick}>
                        Post
                    </button>
                    
                    {console.log(submit)}

                    { submit && <ProgressBar
                        image={image}
                        setImage={setImage} 
                        title={title}
                        setTitle={setTitle}
                        caption={caption}
                        setCaption={setCaption}
                        setSubmit={setSubmit}
                    />}
                </Card>
            </div>
        </div>
    )
}

const styles = {

    containerStyle: {
      width: 700,
      height: 400,
      justifyContent: "center",
      backgroundColor: "#F2D9BB",
      borderWidth: 3,
      borderColor: "#EDBF88"
    },

    pageTitle: {
        fontFamily: "sans-serif",
        color: '#FF5657',
        marginBottom: 20
    },
  
    label: {
      color: '#376C8A',
      fontSize: 20,
      fontFamily: "sans-serif"
    },

    titleInput: {
        width: 500,
        height: 40,
        alignItems: "center",
        marginLeft: 100,
        marginBottom: 20
    },

    captionInput: {
        width: 500,
        height: 90,
        alignItems: "center",
        marginLeft: 100,
        marginBottom: 25
    },

    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        marginLeft: 200,
        backgroundColor: "#FED8B1",
        color: "#FF4500",
        borderColor: "#EDBF88",
        fontFamily: "sans-serif"
    }
  };

export default UploadForm
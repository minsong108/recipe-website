import { Card } from 'react-bootstrap';
import '../box.css';
import { projectFirestore, auth, timeStamp } from '../../firebase';

export default function Receipe ({ recipe }) {

  console.log("In Recipe.js")
  console.log(recipe)

  const favorite = () => {

    const favoriteCollectionRef = projectFirestore.collection(auth.currentUser.uid+"-favorite");

    var docName = recipe.id + "";
    const createdAt = timeStamp();

    favoriteCollectionRef.doc(docName).set({ 
      createdAt,
      type: "recipe",
      title: recipe.title,
      image: recipe.image,
      sourceName: recipe.sourceName,
      url: recipe.sourceUrl,
      summary: recipe.summary
    })
  }

  return (

    <div>

        <Card style={styles.containerStyle}>
        
        <Card.Body>
            <Card.Title>
              <h1 style={styles.title} class="text-decoration-underline">
                {recipe.title}
              </h1>
            </Card.Title>

            <Card.Img variant="top" src={recipe.image} />

            <Card.Text>
              <h4 style={styles.label} class="text-decoration-underline">
                Source Name: 
              </h4>
              
              <h5>
                {recipe.sourceName}
              </h5>
            </Card.Text>

            <h4 style={styles.label} class="text-decoration-underline">
              Recipe URL: 
            </h4>
              
            <a target="_blank" href={recipe.sourceUrl}>
              <h5 style={styles.title}>
                {recipe.sourceUrl}
              </h5>
            </a>

            <Card.Text>
              <h4 style={styles.label} class="text-decoration-underline">
                Summary: 
              </h4>
              
              <h5>
                {recipe.summary}
              </h5>
            </Card.Text>
            <button onClick={favorite}>Add to Favorite</button>
        </Card.Body>
        </Card>
    </div>
  )
}

const styles = {
  containerStyle: {
    marginBottom: 40,
    marginLeft: 30,
    marginRight: 30,
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
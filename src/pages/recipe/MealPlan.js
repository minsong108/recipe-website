import { Card } from 'react-bootstrap';
import '../box.css';

export default function Receipe ({ meal, number }) {

  console.log("In MealPlan.js")
  

  return (

    <div>
 
        <Card style={styles.containerStyle} >
        
        <Card.Body>

            <Card.Title>
                <h1 style={styles.title} class="text-decoration-underline">
                    Meal {number}
                </h1>
            </Card.Title>

            <Card.Title>
              <h2 style={styles.title} class="text-decoration-underline">
                {meal.title}
              </h2>
            </Card.Title>

            <Card.Img variant="top" src={meal.image} />

            <Card.Text>
              <h4 style={styles.label} class="text-decoration-underline">
                Source Name: 
              </h4>
              
              <h5>
                {meal.sourceName}
              </h5>
            </Card.Text>

            <h4 style={styles.label} class="text-decoration-underline">
              Recipe URL: 
            </h4>
              
            <a target="_blank" href={meal.sourceUrl}>
              <h5 style={styles.title}>
                {meal.sourceUrl}
              </h5>
            </a>

            <Card.Text>
              <h4 style={styles.label} class="text-decoration-underline">
                Summary: 
              </h4>
              
              <h5>
                {meal.summary}
              </h5>
            </Card.Text>
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
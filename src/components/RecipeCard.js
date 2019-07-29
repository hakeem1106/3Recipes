import React, { Component } from 'react';
import '../containers/recipecard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, Button } from 'react-bootstrap';

class RecipeCard extends Component {

    render() {
        return (//this card will need to updated with database information to change content
            <div>
                <div>
                    <Card className="main-card">
                        <CardImg variant="top" src="../images/spaghetti.jpg/100px180" alt="spaghetti" />
                        <Card.Body>
                            <Card.Title>Mom's Spaghetti</Card.Title>
                            <Card.Text>
                                Some quick, simple steps to create a delicious dish of spaghetti that will leave your knees weak and palms sweaty.
                            </Card.Text>
                            <Button variant="primary">View Recipe</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default RecipeCard;

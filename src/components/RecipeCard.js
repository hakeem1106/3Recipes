import React, { Component } from 'react';
import { Card, CardImg, Button } from 'react-bootstrap';
import spaghetti from '../images/spaghetti.jpg';
import ViewRecipeModal from './ViewRecipeModal';
import '../containers/recipecard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class RecipeCard extends Component {
    state ={
            show: false
    }

    showModal = () => {
            this.setState = { show: true };
    }

    hideModal = () => {
        this.setState = { show: false };
    }

    render() {
        return (//this card will need to updated with database information to change content
            <div>
                <div>
                    <Card className="main-card">
                        <CardImg className="recipe-image" variant="top" src={spaghetti} alt="spaghetti" />
                        <Card.Body>
                            <Card.Title>Mom's Spaghetti</Card.Title>
                            <Card.Text className="recipe-description">
                                Some quick, simple steps to create a delicious dish of spaghetti that will leave your knees weak and palms sweaty.
                            </Card.Text>
                            <Button type="button" variant="primary" className="modal-button" onClick={this.showModal}>View Recipe</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default RecipeCard;

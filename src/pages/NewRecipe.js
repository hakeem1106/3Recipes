import React, { Component } from "react";
import Recipes from "../components/RecipeForm";
import Navigation from "../components/Navigation";
import Footer from '../components/Footer';
import "../containers/newrecipe.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

export default class NewRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="new-recipe-background">
        <Navigation />
        <div className="flex-container">
          <Card id="home">
            <Card.Body>
              <Recipes />
            </Card.Body>
          </Card>
        </div>
        <footer className="new-recipe-footer">
            <Footer />
        </footer>
      </div>
    );
  }
}

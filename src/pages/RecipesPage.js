import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import Navigation from '../components/Navigation';
import RecipeCard from '../components/RecipeCard';
import AddRecipeButton from '../components/AddRecipeButton';
import '../containers/recipespage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import RecipeForm from '../components/RecipeForm'
import{Button} from 'react-bootstrap'

class RecipesPage extends Component {
    constructor(props){
        super(props)
        this.state={
            newFood: {hidden: true}

            
        }
        this.addNew= this.addNew.bind(this)
    }
    
    addNew=(event)=>{
        event.preventDefault()
        this.setState({
            
        })
        console.log(this.state.newFood)
        console.log("this was pressed")
      }


    render() {
        return (
            <div className="recipe-page-background">
                <Navigation />
                <div className="flex-container">
                {/* Content is static at the moment but when implemented */}
                {/* data will be pulled from database */}
                    <div className="grid-container">
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                    </div>
                </div>

                <div className="add-recipe">
                    <h6>Like to add your own recipe?</h6>
                    <Button onClick={this.addNew}
                    style={{ color: "whitesmoke", textDecoration: "none" }}
                    className="add-recipe-link"
                    >
                     Add Recipe
                    </Button>
                </div>
                <Footer />
            </div>
        )
    }
}

export default RecipesPage;
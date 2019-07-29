import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import RecipeCard from '../components/RecipeCard';
import AddRecipeButton from '../components/AddRecipeButton';
import '../containers/recipespage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class RecipesPage extends Component {

    render() {
        return (
            <div>
                <Navigation />
                <div className="d-flex justify-content-center">
                    <div className="grid-container">
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                    </div>
                </div>

                <footer>
                    <h6>Like to add your own recipe?</h6>
                    <AddRecipeButton />
                </footer>
            </div>
        )
    }
}

export default RecipesPage;
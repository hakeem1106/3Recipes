import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import RecipeCard from '../components/RecipeCard';
import AddRecipeButton from '../components/AddRecipeButton';
import '../containers/recipespage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';

class RecipesPage extends Component {

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
                    <AddRecipeButton />
                </div>
                <Footer />
            </div>
        )
    }
}

export default RecipesPage;
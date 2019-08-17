import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CustomCarousel from "../components/CustomCarousel";
import { Jumbotron, Container } from "react-bootstrap";
import "../containers/homepage.css";
import RecipeCard from "../components/RecipeCard";

const HomePage = () => {
  return (
    <div className="home-page-background">
      <Navigation />
      <Jumbotron fluid>
        <Container>
          <h1 id="title">3Recipes</h1>
          <p>
            A website where you can find all your favorite recipes in one place.
          </p>
        </Container>
      </Jumbotron>
      <CustomCarousel />
      <h3 className="recent-recipes-header">Recently Posted Recipes</h3>
      <div className="recent-recipes">
        <RecipeCard />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import '../containers/homepage.css';

const HomePage = () => {
  return (
    <div className="home-page-background">
      <Navigation />
      <div>
        {/* Placeholder text below */}
        <h1 style={{height: "100vh", paddingTop: "30%", color: "whitesmoke"}}>3Recipes</h1>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
